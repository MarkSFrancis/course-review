import { firestore, Query } from "../../utils";
import { isDocQuery } from "../../utils/hooks/firebase/firestore/query/queryTypeHelpers";
import { docUpdateHandler, SubscribableQuery } from "./firestore";
import { collectionUpdateHandler } from "./firestore/collectionUpdateHandler";

export const queryToSubscription = <T, TQuery extends Query>(
  query: TQuery
): SubscribableQuery<T> => {
  let subscribable: SubscribableQuery<T>;

  if (isDocQuery(query)) {
    subscribable = docUpdateHandler<T>(query);
  } else {
    subscribable = collectionUpdateHandler<T>(
      query as firestore.CollectionQuery
    );
  }

  return subscribable;
};
