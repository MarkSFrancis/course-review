import { firestore, WithId } from "../../../../firebase/firestore";

export type Query = firestore.CollectionQuery | firestore.DocRef;
export type QueryResult<
  T,
  TRef extends Query
> = TRef extends firestore.CollectionQuery ? WithId<T>[] : WithId<T>;

export function isDocQuery(query: Query): query is firestore.DocRef {
  const docQuery = query as firestore.DocRef;
  if (docQuery.collection) {
    return true;
  } else {
    return false;
  }
}
