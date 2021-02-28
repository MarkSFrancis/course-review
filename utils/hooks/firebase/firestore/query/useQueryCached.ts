import { useRef } from "react";
import { firestore } from "../../../../firebase";

export const useQueryCached = <T>(
  query: firestore.DocsRef<T> | firestore.DocRef<T>
) => {
  const previousQuery = useRef();

  const previous = previousQuery.current;

  const isEqual = previous && query && query.isEqual(previous);

  if (isEqual) {
    return previous;
  } else {
    return query;
  }
};
