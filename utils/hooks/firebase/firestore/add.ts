import { useCallback } from "react";
import { db } from "../../../firebase";
import { useFetch } from "../../fetch";

export const useFirestoreDelete = () => {
  const deleteFunc = useCallback(async (path: string) => {
    await db.doc(path).delete();
  }, []);

  return useFetch(deleteFunc);
};
