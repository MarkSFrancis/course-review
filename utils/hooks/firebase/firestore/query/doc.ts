import { db, firestore } from "../../../../firebase/firestore";
import { useFirestoreQueryReducer } from "./queryReducer";
import { FirebaseQueryBuilder } from "./state";

export const useFirestoreQueryDoc = <T>(
  query: FirebaseQueryBuilder<firestore.DocRef>
) => {
  const ref = query(db);

  return useFirestoreQueryReducer<T, firestore.DocRef>(ref);
};
