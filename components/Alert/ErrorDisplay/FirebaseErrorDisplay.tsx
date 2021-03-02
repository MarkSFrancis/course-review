import { FC } from "react";
import { FirebaseError } from "../../../utils";

export function isFirebaseError(error: unknown): error is FirebaseError {
  if (typeof error !== "object") {
    return false;
  }

  const firebaseError = error as FirebaseError;
  return (
    !!firebaseError.error?.code && !!firebaseError.error?.name && !!firebaseError.error?.message
  );
}

export const FirebaseErrorDisplay: FC<{ err: FirebaseError }> = (props) => (
  <>
    {props.err.error.code} - {props.err.error.message}
  </>
);
