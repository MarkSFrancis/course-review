import { useCallback } from "react";
import { db, firestore, WithId } from "../../../firebase";
import { useFetch } from "../../fetch";

export const useFirestoreGetDoc = <T>() => {
  const getFunc = useCallback((path: string, opts?: firestore.GetOptions) => {
    return db.doc(path).get(opts);
  }, []);

  const formatFunc = useCallback(
    (r: firestore.DocSnapshot) =>
      r.exists &&
      ({
        id: r.id,
        ...r.data(),
      } as WithId<T>),
    []
  );

  return useFetch(getFunc, formatFunc);
};
