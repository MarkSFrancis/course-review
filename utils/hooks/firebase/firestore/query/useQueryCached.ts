import { useRef } from "react";
import { isDocQuery, Query } from "./queryTypeHelpers";

export const useQueryCached = (query: Query) => {
  const previousQuery = useRef<Query>();

  const previous = previousQuery.current;

  let isEqual: boolean;
  if (!previous || !query) {
    isEqual = false;
  } else if (isDocQuery(query)) {
    if (isDocQuery(previous)) {
      isEqual = query.isEqual(previous);
    } else {
      isEqual = false;
    }
  } else {
    if (!isDocQuery(previous)) {
      isEqual = query.isEqual(previous);
    } else {
      isEqual = false;
    }
  }

  if (isEqual) {
    return previous;
  } else {
    previousQuery.current = query;
    return query;
  }
};
