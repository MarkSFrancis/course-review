import { Unsubscribable } from "rxjs";
import { Query, QueryState } from "../../utils";
import { queriesMatch } from "../../utils/hooks/firebase/firestore/query/useQueryCached";
import { SubscribableQuery } from "./firestore";
import { queryToSubscription } from "./queryUpdateHandler";

export interface RunningFirebaseQuery {
  query: Query;
  subject: SubscribableQuery<unknown>;
}

const setupNewQuery = (query: Query): RunningFirebaseQuery => {
  const subject = queryToSubscription(query);

  return {
    query,
    subject,
  };
};

const findQuery = (
  queries: RunningFirebaseQuery[],
  query: Query
): RunningFirebaseQuery => {
  const match = queries.find((q) => queriesMatch(q.query, query));

  return match;
};

export const removeQuery = (
  queries: RunningFirebaseQuery[],
  queryToRemove: Query,
  subscription: Unsubscribable
) => {
  subscription.unsubscribe();

  const match = findQuery(queries, queryToRemove);

  if (match && match.subject.totalListeners === 0) {
    match.subject.destroy();
    queries = queries.filter((q) => q !== match);
  }

  return { queries };
};

export const addQuery = (
  queries: RunningFirebaseQuery[],
  queryToAdd: Query,
  listener: (state: QueryState<unknown>) => void
) => {
  let match = queries.find((q) => queriesMatch(q.query, queryToAdd));

  if (!match) {
    match = setupNewQuery(queryToAdd);
    queries = [...queries, match];
  }

  const subscription = match.subject.subscribe(listener);

  return { subscription, queries };
};
