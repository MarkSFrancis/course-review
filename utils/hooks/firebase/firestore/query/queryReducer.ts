import { useEffect, useState } from "react";
import { useFirebaseApp } from "../../../../../components/FirebaseProvider/FirebaseProvider";
import { Query, QueryResult } from "./queryTypeHelpers";
import { QueryState } from "./state";
import { useQueryCached } from "./useQueryCached";

export const useFirestoreQueryReducer = <T, TQuery extends Query>(
  query: TQuery
): QueryState<QueryResult<T, TQuery>> => {
  const [state, setState] = useState<QueryState<QueryResult<T, TQuery>>>({
    state: "loading",
  });

  const cachedQuery = useQueryCached(query);
  const { queries } = useFirebaseApp();

  useEffect(() => {
    const unsubscribe = queries.subscribe(cachedQuery, (state) =>
      setState(state as QueryState<QueryResult<T, TQuery>>)
    );

    return unsubscribe;
  }, [cachedQuery]);

  return state as QueryState<QueryResult<T, TQuery>>;
};
