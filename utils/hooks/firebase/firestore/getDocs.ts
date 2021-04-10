import { useCallback } from "react";
import { db, firestore, WithId } from "../../../firebase";
import { useFetch } from "../../fetch";

export const useFirestoreGetDocs = <T>() => {
  const getFunc = useCallback(
    async (path: string, opts?: firestore.GetOptions) => {
      const docs = await db.collection(path).get(opts);

      return docs.docs.map(
        (d) =>
          ({
            id: d.id,
            ...d.data(),
          } as WithId<T>)
      );
    },
    []
  );

  return useFetch(getFunc);
};
