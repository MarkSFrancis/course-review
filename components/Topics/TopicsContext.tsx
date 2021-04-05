import React, { createContext, FC, useContext } from "react";
import { Topic } from "../../models";
import { useFirestoreCollection, WithId } from "../../utils";
import { QueryGuard } from "../Query";

const context = createContext<WithId<Topic>[]>(undefined);

export const useTopics = () => useContext(context);
export const TopicsProvider: FC = (props) => {
  const topicsQuery = useFirestoreCollection<Topic>((db) =>
    db.collection("topics").orderBy("createdOn", "desc").limit(20)
  );

  return (
    <QueryGuard query={topicsQuery}>
      {({ value }) => (
        <context.Provider value={value}>{props.children}</context.Provider>
      )}
    </QueryGuard>
  );
};
