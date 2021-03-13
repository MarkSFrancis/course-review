import { Query, QueryState } from "../../utils";

export interface FirebaseState {
  queries: {
    subscribe: (
      query: Query,
      listener: (state: QueryState<unknown>) => void
    ) => () => void;
  };
}
