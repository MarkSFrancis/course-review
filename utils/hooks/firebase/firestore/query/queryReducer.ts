import { Reducer, useEffect, useReducer } from "react";
import { WithId } from "../../../../firebase/firestore";
import { isDocQuery, Query, QueryResult } from "./queryTypeHelpers";
import { QueryState } from "./state";
import { useQueryCached } from "./useQueryCached";

export interface FirestoreQueryOptions {
  suspendUntil?: () => boolean;
}

const reducer = <T>(
  state: QueryState<T>,
  action: { type: QueryState<T>["state"]; payload: unknown }
): QueryState<T> => {
  const previousValue =
    state.state === "success" ? state.value : state.previousValue;

  switch (action.type) {
    case "suspended":
      return {
        state: action.type,
        previousValue: previousValue,
      };
    case "loading":
      return {
        state: action.type,
        previousValue: previousValue,
      };
    case "notFound":
      return {
        state: action.type,
        previousValue: previousValue,
      };
    case "error":
      return {
        state: action.type,
        error: action.payload,
        previousValue: previousValue,
      };
    case "success":
      return {
        state: action.type,
        value: action.payload as T,
      };
  }
};

export const useFirestoreQueryReducer = <T, TQuery extends Query<T>>(
  query: TQuery,
  opts?: FirestoreQueryOptions | undefined
): QueryState<QueryResult<T, TQuery>> => {
  let initialState: QueryState<T> = {
    state: opts?.suspendUntil?.() === false ? "loading" : "suspended",
    previousValue: undefined,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const queryCached = useQueryCached(query);

  useEffect(() => {
    const suspended = opts?.suspendUntil?.() === true;

    if (suspended || !queryCached) {
      dispatch({
        type: "suspended",
        payload: undefined,
      });
      return;
    }

    dispatch({
      type: "loading",
      payload: undefined,
    });

    if (isDocQuery(queryCached)) {
      return queryCached.onSnapshot(
        (ref) => {
          if (!ref.exists) {
            dispatch({
              type: "notFound",
              payload: undefined,
            });
            return;
          }
          dispatch({
            type: "success",
            payload: {
              id: ref.id,
              ...ref.data(),
            } as WithId<T>,
          });
        },
        (err) => dispatch({ type: "error", payload: err })
      );
    } else {
      return queryCached.onSnapshot(
        (refs) => {
          dispatch({
            type: "success",
            payload: refs.docs.map(
              (r) =>
                ({
                  id: r.id,
                  ...r.data(),
                } as WithId<T>)
            ),
          });
        },
        (err) => dispatch({ type: "error", payload: err })
      );
    }
  }, [queryCached, opts]);

  return state as QueryState<QueryResult<T, TQuery>>;
};
