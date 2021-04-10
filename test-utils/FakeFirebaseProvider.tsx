import { createContext, FC, useCallback, useContext } from "react";
import { FirebaseState as FirebaseAppState } from "../components/FirebaseProvider/models";
import { Query, QueryState } from "../utils";
import { queriesMatch } from "../utils/hooks/firebase/firestore/query/useQueryCached";

const firebaseAppContext = createContext<FirebaseAppState>({
  queries: undefined,
});

export interface FakeFirebaseProviderProps {
  queryStates: { query: Query; state: QueryState<unknown> }[];
}

export const useFirebaseApp = () => useContext(firebaseAppContext);

export const FakeFirebaseProvider: FC<FakeFirebaseProviderProps> = (props) => {
  const { queryStates, ...providerProps } = props;

  const subscribe: FirebaseAppState["queries"]["subscribe"] = useCallback(
    (subscriber, next) => {
      const match = queryStates.find(({ query: q }) =>
        queriesMatch(q, subscriber)
      );

      if (!match) {
        next({
          state: "loading",
        });
      } else {
        next(match.state[1]);
      }

      return () => void 0;
    },
    [queryStates]
  );

  return (
    <firebaseAppContext.Provider
      {...providerProps}
      value={{ queries: { subscribe } }}
    />
  );
};
