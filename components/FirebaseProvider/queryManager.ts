import { useCallback, useRef } from "react";
import { BehaviorSubject } from "rxjs";
import { Query, QueryState } from "../../utils";
import { queriesMatch } from "../../utils/hooks/firebase/firestore/query/useQueryCached";
import { queryUpdateHandler } from "./queryUpdateHandler";

export interface RunningFirebaseQuery {
  query: Query;
  subject: BehaviorSubject<QueryState<unknown>>;
  totalSubscriptions: number;
  destroy: () => void;
}

const setupNewQuery = (query: Query): RunningFirebaseQuery => {
  const [subject, destroy] = queryUpdateHandler(query);

  return {
    query,
    subject,
    totalSubscriptions: 0,
    destroy,
  };
};

export const useQueryManager = () => {
  let ref = useRef<RunningFirebaseQuery[]>([]);

  const unsubscribe = useCallback((match: RunningFirebaseQuery) => {
    const matchIndex = ref.current.indexOf(match);
    match.totalSubscriptions--;

    if (match.totalSubscriptions === 0) {
      match.destroy();
      ref.current = [
        ...ref.current.slice(0, matchIndex),
        ...ref.current.slice(matchIndex + 1),
      ];
    }
  }, []);

  const subscribe = useCallback(
    (query: Query, listener: (state: QueryState<unknown>) => void) => {
      let match = ref.current.find((q) => queriesMatch(q.query, query));

      if (!match) {
        match = setupNewQuery(query);
        ref.current.push(match);
      }

      match.subject.subscribe(listener);
      match.totalSubscriptions++;

      return () => unsubscribe(match);
    },
    []
  );

  return [subscribe] as const;
};
