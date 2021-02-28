import { useCallback } from "react";
import { db, firestore, WithId } from "../../../firebase";
import { useFetch } from "../../fetch";

export const useFirestoreGetDocs = <T>() => {
  const getFunc = useCallback((path: string, opts?: firestore.GetOptions) => {
    return db.collection(path).get(opts);
  }, []);

  const formatFunc = useCallback(
    (r: firestore.DocsSnapshot) =>
      r.docs.map(
        (d) =>
          ({
            id: d.id,
            ...d.data(),
          } as WithId<T>)
      ),
    []
  );

  return useFetch(getFunc, formatFunc);
};
