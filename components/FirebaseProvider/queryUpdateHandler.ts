import { Reducer, ReducerState, ReducerAction } from "react";
import { BehaviorSubject } from "rxjs";
import { firestore, Query, QueryState, WithId } from "../../utils";
import { isDocQuery } from "../../utils/hooks/firebase/firestore/query/queryTypeHelpers";

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
      console.error("Failed to get data", action.payload);
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

const reduceToSubject = <T extends Reducer<any, any>>(
  reducer: T,
  subject: BehaviorSubject<ReducerState<T>>
) => {
  const dispatch = (action: ReducerAction<T>) => {
    subject.next(reducer(subject.value, action));
  };

  return dispatch;
};

export const queryUpdateHandler = <T, TQuery extends Query>(
  query: TQuery
): [state: BehaviorSubject<QueryState<unknown>>, destroy: () => void] => {
  let initialState: QueryState<T> = {
    state: "loading",
    previousValue: undefined,
  };

  const subject = new BehaviorSubject(initialState);
  const dispatch = reduceToSubject(reducer, subject);

  dispatch({
    type: "loading",
    payload: undefined,
  });

  let destroy: () => void;
  if (isDocQuery(query)) {
    destroy = query.onSnapshot(
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
      (err) => {
        dispatch({ type: "error", payload: err });
      }
    );
  } else {
    destroy = (query as firestore.CollectionQuery).onSnapshot(
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
      (err) => {
        dispatch({ type: "error", payload: err });
      }
    );
  }

  return [subject, destroy];
};
