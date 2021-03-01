import { FC } from "react";
import { FirebaseError } from "../../utils";

export function isFirebaseError(error: unknown): error is FirebaseError {
  if (typeof error !== "object") {
    return false;
  }

  const firebaseError = error as FirebaseError;
  return (
    !!firebaseError.code && !!firebaseError.name && !!firebaseError.message
  );
}

export const FirebaseErrorDisplay: FC<{ children: FirebaseError }> = (
  props
) => (
  <>
    {props.children.code} - {props.children.message}
  </>
);
