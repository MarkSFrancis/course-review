import { BehaviorSubject } from "rxjs";
import { QueryState } from "../../../utils";
import { createCounterSubject } from './subscribable';

interface ReducerAction<T> {
  type: QueryState<T>["state"];
  payload: unknown;
}

const reducer = <T>(
  _state: QueryState<T>,
  action: ReducerAction<T>
): QueryState<T> => {
  switch (action.type) {
    case "loading":
      return {
        state: action.type,
      };
    case "notFound":
      return {
        state: action.type,
      };
    case "error":
      console.error("Failed to get data", action.payload);
      return {
        state: action.type,
        error: action.payload,
      };
    case "success":
      return {
        state: action.type,
        value: action.payload as T,
      };
  }
};

export const queryStateAsSubject = <T>(initialValue: QueryState<T>) => {
  const reducedSubject = new BehaviorSubject<QueryState<T>>(initialValue);

  const dispatch = (action: ReducerAction<T>) => {
    reducedSubject.next(reducer(reducedSubject.value, action));
  };

  const subject = createCounterSubject(reducedSubject);

  return { subject, dispatch };
};
