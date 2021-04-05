import { BehaviorSubject } from "rxjs";
import { firestore, Query, QueryState } from "../../utils";
import { isDocQuery } from "../../utils/hooks/firebase/firestore/query/queryTypeHelpers";
import { docUpdateHandler } from "./firestore";
import { collectionUpdateHandler } from "./firestore/collectionUpdateHandler";

export const queryUpdateHandler = <T, TQuery extends Query>(
  query: TQuery
): [state: BehaviorSubject<QueryState<T>>, destroy: () => void] => {
  let result: {
    subject: BehaviorSubject<QueryState<T>>;
    destroy: () => void;
  };

  if (isDocQuery(query)) {
    result = docUpdateHandler(query);
  } else {
    result = collectionUpdateHandler(query as firestore.CollectionQuery);
  }

  return [result.subject, result.destroy];
};
