import { firestore } from "../../../../firebase/firestore";

export type Query<T> = firestore.DocsRef<T> | firestore.DocRef<T>;
export type QueryResult<
  T,
  TRef extends Query<T>
> = TRef extends firestore.DocsRef<T> ? T[] : T;

export function isDocQuery<T>(
  query: Query<T>
): query is firestore.DocRef<T> {
  const colQuery = query as firestore.DocsRef<T>;
  if (colQuery.doc) {
    return false;
  } else {
    return true;
  }
}
