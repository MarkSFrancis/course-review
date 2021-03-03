import { db, firestore } from "../../../../firebase/firestore";
import {
  FirestoreQueryOptions,
  useFirestoreQueryReducer,
} from "./queryReducer";
import { FirebaseQueryBuilder } from "./state";

export const useFirestoreQueryDoc = <T>(
  query: FirebaseQueryBuilder<T, firestore.DocRef>,
  opts?: FirestoreQueryOptions | undefined
) => {
  const ref = query(db);

  return useFirestoreQueryReducer<T, firestore.DocRef>(ref, opts);
};
