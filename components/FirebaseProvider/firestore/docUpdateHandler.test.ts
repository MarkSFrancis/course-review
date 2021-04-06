import {
  firestore,
  QueryFailedState,
  QueryState,
  QuerySuccessState,
  WithId,
} from "../../../utils";
import { collectionUpdateHandler } from "./collectionUpdateHandler";

const createQuery = <T>(destroyHandler?: () => void) => {
  let nextHandlers: ((
    snapshot: firestore.CollectionSnapshot<T>
  ) => void)[] = [];
  let errorHandlers: ((snapshot: firestore.Error) => void)[] = [];
  let completeHandlers: (() => void)[] = [];

  const query = {
    onSnapshot: (
      onNext: (snapshot: firestore.CollectionSnapshot<T>) => void,
      onError?: (error: firestore.Error) => void,
      onCompletion?: () => void
    ) => {
      nextHandlers.push(onNext);
      onError && errorHandlers.push(onError);
      onCompletion && completeHandlers.push(onCompletion);

      return () => destroyHandler?.();
    },
  } as firestore.CollectionRef<T>;

  const emit = <T extends (...args: any[]) => any>(
    handlers: T[],
    ...value: Parameters<T>
  ) => {
    handlers.forEach((h) => h(...value));
  };

  return {
    query,
    emitNext: (value: firestore.CollectionSnapshot<T>) =>
      emit(nextHandlers, value),
    emitError: (value: firestore.Error) => emit(errorHandlers, value),
    emitComplete: () => emit(completeHandlers),
  };
};

describe("collectionUpdateHandler", () => {
  it("should set the initial value to loading", () => {
    const { query } = createQuery();

    const subscription = collectionUpdateHandler(query);

    const sub = jest.fn();
    subscription.subscribe(sub);

    expect(sub).toHaveBeenCalledTimes(1);
    expect(sub).toHaveBeenCalledWith<[QueryState<unknown>]>({
      state: "loading",
    });
  });

  it("should tear down the query when destroyed", () => {
    const destroy = jest.fn();
    const { query } = createQuery(destroy);

    const subscription = collectionUpdateHandler(query);

    subscription.destroy();

    expect(destroy).toHaveBeenCalledTimes(1);
  });

  it("should emit success when no records are found", () => {
    const { query, emitNext } = createQuery();

    const subscription = collectionUpdateHandler(query);

    const fn = jest.fn();
    subscription.subscribe(fn);

    emitNext({
      docs: [],
      empty: true,
    } as firestore.CollectionSnapshot<unknown>);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith<[QuerySuccessState<unknown>]>(2, {
      state: "success",
      value: [],
    });
  });

  it("should emit success with the value when the snapshot updates", () => {
    type DbType = { text: string };
    const { query, emitNext } = createQuery<DbType>();

    const subscription = collectionUpdateHandler(query);

    const fn = jest.fn();
    subscription.subscribe(fn);

    const value: WithId<DbType> = {
      id: "1234",
      text: "Test value",
    };

    emitNext({
      docs: [
        {
          id: value.id,
          data: () => ({
            text: value.text,
          }),
        },
      ],
    } as firestore.CollectionSnapshot<DbType>);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith<[QuerySuccessState<WithId<DbType>[]>]>(
      2,
      {
        state: "success",
        value: [value],
      }
    );
  });

  it("should emit an error when the query emits an error", () => {
    const { query, emitError } = createQuery();

    const subscription = collectionUpdateHandler(query);

    const fn = jest.fn();
    subscription.subscribe(fn);

    const error: firestore.Error = {
      code: "Test code",
      message: "Test error message",
      name: "Test_Error",
    };

    emitError(error);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith<[QueryFailedState]>(2, {
      state: "error",
      error,
    });
  });
});
