import { mocked } from "test-utils";
import { firestore, QueryLoadingState, WithId } from "../../../utils";
import { docUpdateHandler } from "./docUpdateHandler";
import { QueryReducerAction, queryStateAsSubject } from "./queryReducer";

jest.mock("./queryReducer");
const queryStateAsSubjectMock = mocked(queryStateAsSubject);

const createQuery = <T>(destroyHandler?: () => void) => {
  let nextHandlers: ((snapshot: firestore.DocSnapshot<T>) => void)[] = [];
  let errorHandlers: ((snapshot: firestore.Error) => void)[] = [];
  let completeHandlers: (() => void)[] = [];

  const query = {
    onSnapshot: (
      onNext: (snapshot: firestore.DocSnapshot<T>) => void,
      onError?: (error: firestore.Error) => void,
      onCompletion?: () => void
    ) => {
      nextHandlers.push(onNext);
      onError && errorHandlers.push(onError);
      onCompletion && completeHandlers.push(onCompletion);

      return () => destroyHandler?.();
    },
  } as firestore.DocRef;

  const emit = <T extends (...args: any[]) => any>(
    handlers: T[],
    ...value: Parameters<T>
  ) => {
    handlers.forEach((h) => h(...value));
  };

  return {
    query,
    emitNext: (value: firestore.DocSnapshot<T>) => emit(nextHandlers, value),
    emitError: (value: firestore.Error) => emit(errorHandlers, value),
    emitComplete: () => emit(completeHandlers),
  };
};

describe("collectionUpdateHandler", () => {
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

    docUpdateHandler(query);

    expect(queryStateAsSubjectMock).toHaveBeenCalledTimes(1);
    expect(queryStateAsSubjectMock).toHaveBeenCalledWith<[QueryLoadingState]>({
      state: "loading",
    });
  });

  it("should tear down the query when destroyed", () => {
    const destroyListenerFn = jest.fn();
    const { query } = createQuery(destroyListenerFn);

    const { destroy } = docUpdateHandler(query);

    destroy();

    expect(destroyListenerFn).toHaveBeenCalledTimes(1);
  });

  it("should emit notFound when the record does not exist", () => {
    const { query, emitNext } = createQuery();

    docUpdateHandler(query);

    emitNext({
      exists: false,
    } as firestore.DocSnapshot<unknown>);

    expect(dispatchFn).toHaveBeenCalledTimes(1);
    expect(dispatchFn).toHaveBeenCalledWith<[QueryReducerAction<unknown>]>({
      type: "notFound",
      payload: undefined,
    });
  });

  it("should emit success with the value when the snapshot updates", () => {
    type DbType = { text: string };
    const { query, emitNext } = createQuery<DbType>();

    docUpdateHandler(query);

    const value: WithId<DbType> = {
      id: "1234",
      text: "Test value",
    };

    emitNext({
      exists: true,
      id: value.id,
      data: () => ({
        text: value.text,
      }),
    } as firestore.DocSnapshot<DbType>);

    expect(dispatchFn).toHaveBeenCalledTimes(1);
    expect(dispatchFn).toHaveBeenCalledWith<
      [QueryReducerAction<WithId<DbType>>]
    >({
      type: "success",
      payload: value,
    });
  });

  it("should emit an error when the query emits an error", () => {
    const { query, emitError } = createQuery();

    docUpdateHandler(query);

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
