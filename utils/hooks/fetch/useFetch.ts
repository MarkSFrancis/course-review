import { useCallback, useEffect, useReducer } from "react";
import { FetchState } from "./state";

const fetchReducer = <T>(
  _state: FetchState<T>,
  action: {
    type: FetchState<T>["state"];
    payload: unknown;
  }
): FetchState<T> => {
  switch (action.type) {
    case "loading":
      return {
        state: "loading",
      };
    case "error":
      return {
        state: "error",
        error: action.payload,
      };
    case "suspended":
      return {
        state: "suspended",
      };
    case "success":
      return {
        state: "success",
        value: action.payload as T,
      };
  }
};

export const useFetch = <TParams extends unknown[] = [], TResult = void>(
  func: (...params: TParams) => Promise<TResult> | TResult
) => {
  const [reducer, dispatch] = useReducer(fetchReducer, {
    state: "suspended",
  });

  const trigger = useCallback(async (...params: TParams) => {
    dispatch({
      type: "loading",
      payload: undefined,
    });

    let result: TResult;
    try {
      result = await func(...params);

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

    return result;
  }, []);

  return [trigger, reducer as FetchState<TResult>] as const;
};
