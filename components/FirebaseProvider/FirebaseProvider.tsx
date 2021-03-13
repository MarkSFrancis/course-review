import { createContext, FC, useContext } from "react";
import { FirebaseState as FirebaseAppState } from "./models";
import { useQueryManager } from "./queryManager";

const firebaseAppContext = createContext<FirebaseAppState>({
  queries: undefined,
});

export const useFirebaseApp = () => useContext(firebaseAppContext);

export const FirebaseProvider: FC = (props) => {
  const [subscribe] = useQueryManager();

  return (
    <firebaseAppContext.Provider
      {...props}
      value={{ queries: { subscribe } }}
    />
  );
};
