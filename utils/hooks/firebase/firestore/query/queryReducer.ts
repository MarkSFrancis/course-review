import { useEffect, useState } from "react";
import { useFirebaseApp } from "../../../../../components/FirebaseProvider/FirebaseProvider";
import { Query, QueryResult } from "./queryTypeHelpers";
import { QueryState } from "./state";

export const useFirestoreQueryReducer = <T, TQuery extends Query>(
  query: TQuery
): QueryState<QueryResult<T, TQuery>> => {
  const [state, setState] = useState<QueryState<QueryResult<T, TQuery>>>({
    state: "loading",
    previousValue: undefined,
  });

  const { queries } = useFirebaseApp();

  useEffect(
    () =>
      queries.subscribe(query, (state) =>
        setState(state as QueryState<QueryResult<T, TQuery>>)
      ),
    []
  );

  return state as QueryState<QueryResult<T, TQuery>>;
};
