import { useEffect, useState } from "react";
import { auth, firebaseAuth } from "../../../firebase";

export type UserState =
  | { isLoadingUser: true; user: undefined }
  | { isLoadingUser: false; user: firebaseAuth.User };

export const useUser = () => {
  const [user, setUser] = useState<UserState>(() =>
    auth.currentUser
      ? { isLoadingUser: false, user: auth.currentUser }
      : { isLoadingUser: true, user: undefined }
  );

  useEffect(
    () =>
      auth.onAuthStateChanged((user) => {
        setUser({ user, isLoadingUser: false });
      }),
    []
  );

  return user;
};
