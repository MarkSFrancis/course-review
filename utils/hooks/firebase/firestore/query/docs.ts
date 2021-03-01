import { db, firestore } from "../../../../firebase/firestore";
import {
  FirestoreQueryOptions,
  useFirestoreQueryReducer,
} from "./queryReducer";
import { FirebaseQueryBuilder } from "./state";

export const useFirestoreQueryCollection = <T>(
  query: FirebaseQueryBuilder<Record<string, any>, firestore.CollectionQuery>,
  opts?: FirestoreQueryOptions | undefined
) => {
  const ref = query(db);

  return useFirestoreQueryReducer<T, firestore.CollectionQuery>(ref, opts);
};
