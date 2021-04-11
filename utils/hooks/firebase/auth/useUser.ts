import { useEffect, useState } from "react";
import { auth, firebaseAuth } from "../../../firebase";

export const useUser = () => {
  const [user, setUser] = useState<{ user?: firebaseAuth.User }>(() =>
    auth.currentUser ? { user: auth.currentUser } : undefined
  );

  useEffect(
    () =>
      auth.onAuthStateChanged((user) => {
        setUser({ user });
      }),
    []
  );

  return user;
};
