import { useCallback } from "react";
import { db, firestore } from "../../../firebase";
import { useFetch } from "../../fetch";

export interface FirestoreAddResult {
  id: string;
}

export const useFirestoreAdd = <T>() => {
  const addFunc = useCallback(async (path: string, doc: T) => {
    const newDoc = await db.collection(path).add(doc);

    return { id: newDoc.id };
  }, []);

  return useFetch(addFunc);
};
