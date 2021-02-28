import { useCallback } from "react";
import { db, firestore } from "../../../firebase";
import { useFetch } from "../../fetch";

export const useFirestoreSet = <T>() => {
  const setFunc = useCallback(
    (path: string, doc: T, opts?: firestore.SetOptions) => {
      return db.doc(path).set(doc, opts);
    },
    []
  );

  const formatFunc = useCallback((r: void) => r, []);

  return useFetch(setFunc, formatFunc);
};
