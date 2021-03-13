import { db, firestore } from "../../../../firebase/firestore";
import { useFirestoreQueryReducer } from "./queryReducer";
import { FirebaseQueryBuilder } from "./state";

export const useFirestoreQueryCollection = <T>(
  query: FirebaseQueryBuilder<firestore.CollectionQuery>
) => {
  const ref = query(db);

  return useFirestoreQueryReducer<T, firestore.CollectionQuery>(ref);
};
