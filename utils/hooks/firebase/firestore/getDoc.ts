import { useCallback } from "react";
import { db, firestore, WithId } from "../../../firebase";
import { useFetch } from "../../fetch";

export const useFirestoreGetDoc = <T>() => {
  const getFunc = useCallback(
    async (path: string, opts?: firestore.GetOptions) => {
      const doc = await db.doc(path).get(opts);

      return (
        doc.exists &&
        ({
          id: doc.id,
          ...doc.data(),
        } as WithId<T>)
      );
    },
    []
  );

  return useFetch(getFunc);
};
