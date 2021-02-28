import { useCallback } from "react";
import { db, firestore } from "../../../firebase";
import { useFetch } from "../../fetch";

export interface FirestoreAddResult {
  id: string;
}

export const useFirestoreAdd = <T>() => {
  const addFunc = useCallback((path: string, doc: T) => {
    return db.collection(path).add(doc);
  }, []);

  const formatFunc = useCallback(
    (r: firestore.DocRef): FirestoreAddResult => ({
      id: r.id,
    }),
    []
  );

  return useFetch(addFunc, formatFunc);
};
