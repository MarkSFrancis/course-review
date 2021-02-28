import { db, firestore } from "../../../../firebase/firestore";
import {
  FirestoreQueryOptions,
  useFirestoreQueryReducer,
} from "./queryReducer";
import { FirebaseQueryBuilder } from "./state";

export const useFirestoreQueryDocs = <T>(
  query: FirebaseQueryBuilder<T, firestore.DocsRef<T>>,
  opts?: FirestoreQueryOptions | undefined
) => {
  const ref = query(db);

  return useFirestoreQueryReducer<T, firestore.DocsRef<T>>(ref, opts);
};
