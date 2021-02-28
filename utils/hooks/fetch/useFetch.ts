import { useCallback, useEffect, useReducer } from "react";
import { FetchState } from "./state";

const fetchReducer = <T>(
  state: FetchState<T>,
  action: {
    type: FetchState<T>["state"];
    payload: unknown;
  }
): FetchState<T> => {
  const previousValue =
    state.state === "success" ? state.value : state.previousValue;

  switch (action.type) {
    case "loading":
      return {
        state: "loading",
        previousValue,
      };
    case "error":
      return {
        state: "error",
        error: action.payload,
        previousValue,
      };
    case "suspended":
      return {
        state: "suspended",
        previousValue,
      };
    case "success":
      return {
        state: "success",
        value: action.payload as T,
      };
  }
};

export const useFetch = <
  TParams extends unknown[] = [],
  TResult = void,
  TResponse = Response
>(
  func: (...params: TParams) => Promise<TResponse>,
  responseHandler: (response: TResponse) => Promise<TResult> | TResult
) => {
  const [reducer, dispatch] = useReducer(fetchReducer, {
    state: "suspended",
    previousValue: undefined,
  });

  const trigger = useCallback((...params: TParams) => {
    dispatch({
      type: "loading",
      payload: undefined,
    });

    (async () => {
      try {
        const response = await func(...params);
        const result = await responseHandler(response);

        dispatch({
          type: "success",
          payload: result as TResult,
        });
      } catch (err) {
        dispatch({
          type: "error",
          payload: {
            error: err,
          },
        });
      }
    })();
  }, []);

  return [trigger, reducer as FetchState<TResult>] as const;
};
