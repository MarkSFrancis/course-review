import { mocked } from "ts-jest/utils";
import { firestore, QueryLoadingState, WithId } from "../../../utils";
import { collectionUpdateHandler } from "./collectionUpdateHandler";
import { QueryReducerAction, queryStateAsSubject } from "./queryReducer";

jest.mock("./queryReducer");
const queryStateAsSubjectMock = mocked(queryStateAsSubject);

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

describe("docUpdateHandler", () => {
  const dispatchFn = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    queryStateAsSubjectMock.mockReturnValue({
      dispatch: dispatchFn,
      subject: {
        subscribe: () => ({
          unsubscribe: jest.fn(),
        }),
        totalListeners: 0,
      },
    });
  });

  it("should set the initial value to loading", () => {
    const { query } = createQuery();

    collectionUpdateHandler(query);

    expect(queryStateAsSubjectMock).toHaveBeenCalledTimes(1);
    expect(queryStateAsSubjectMock).toHaveBeenCalledWith<[QueryLoadingState]>({
      state: "loading",
    });
  });

  it("should tear down the query when destroyed", () => {
    const destroyListenerFn = jest.fn();
    const { query } = createQuery(destroyListenerFn);

    const { destroy } = collectionUpdateHandler(query);

    destroy();

    expect(destroyListenerFn).toHaveBeenCalledTimes(1);
  });

  it("should emit success when no records are found", () => {
    const { query, emitNext } = createQuery();

    collectionUpdateHandler(query);

    emitNext({
      docs: [],
      empty: true,
    } as firestore.CollectionSnapshot<unknown>);

    expect(dispatchFn).toHaveBeenCalledTimes(1);
    expect(dispatchFn).toHaveBeenCalledWith<[QueryReducerAction<unknown>]>({
      payload: [],
      type: "success",
    });
  });

  it("should emit success with the value when the snapshot updates", () => {
    type DbType = { text: string };
    const { query, emitNext } = createQuery<DbType>();

    collectionUpdateHandler(query);

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

    expect(dispatchFn).toHaveBeenCalledTimes(1);
    expect(dispatchFn).toHaveBeenCalledWith<
      [QueryReducerAction<WithId<DbType>[]>]
    >({
      type: "success",
      payload: [value],
    });
  });

  it("should emit an error when the query emits an error", () => {
    const { query, emitError } = createQuery();

    collectionUpdateHandler(query);

    const error: firestore.Error = {
      code: "Test code",
      message: "Test error message",
      name: "Test_Error",
    };

    emitError(error);

    expect(dispatchFn).toHaveBeenCalledTimes(1);
    expect(dispatchFn).toHaveBeenCalledWith<[QueryReducerAction<unknown>]>({
      type: "error",
      payload: error,
    });
  });
});
