import { BehaviorSubject } from "rxjs";
import { QueryState } from "../../../utils";

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

export const queryAsSubject = <T>(initialValue: QueryState<T>) => {
  const subject = new BehaviorSubject<QueryState<T>>(initialValue);

  const dispatch = (action: ReducerAction<T>) => {
    subject.next(reducer(subject.value, action));
  };

  return { subject, dispatch };
};
