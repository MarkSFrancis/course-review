import { useCallback, useRef } from "react";
import { Unsubscribable } from "rxjs";
import { Query, QueryState } from "../../utils";
import { addQuery, removeQuery, RunningFirebaseQuery } from "./runningQueries";

export const useQueryManager = () => {
  let ref = useRef<RunningFirebaseQuery[]>([]);

  const unsubscribe = useCallback(
    (query: Query, subscription: Unsubscribable) => {
      const { queries } = removeQuery(ref.current, query, subscription);

      ref.current = queries;
    },
    []
  );

  const subscribe = useCallback(
    (query: Query, listener: (state: QueryState<unknown>) => void) => {
      const { subscription, queries } = addQuery(ref.current, query, listener);

      ref.current = queries;

      return () => unsubscribe(query, subscription);
    },
    [unsubscribe]
  );

  return { subscribe };
};
