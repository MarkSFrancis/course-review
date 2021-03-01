import { useEffect, useState } from "react";
import { auth, firebaseAuth } from "../../../firebase";

export const useUser = () => {
  const [user, setUser] = useState<{ user: firebaseAuth.User }>(() => ({
    user: auth.currentUser,
  }));

  useEffect(
    () =>
      auth.onAuthStateChanged((user) => {
        setUser({ user });
      }),
    []
  );

  return user;
};
