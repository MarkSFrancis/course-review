import { useRef } from "react";
import { isDocQuery, Query } from "./queryTypeHelpers";

export const queriesMatch = (query1: Query, query2: Query) => {
  if (!query1 || !query2) {
    return false;
  }

  if (isDocQuery(query1)) {
    if (!isDocQuery(query2)) {
      return false;
    }

    return query1.isEqual(query2);
  }

  if (isDocQuery(query2)) {
    return false;
  }

  return query1.isEqual(query2);
};

export const useQueryCached = (query: Query) => {
  const previousQuery = useRef<Query>();

  const isEqual = queriesMatch(previousQuery.current, query);

  if (!isEqual) {
    previousQuery.current = query;
  }

  return previousQuery.current;
};
