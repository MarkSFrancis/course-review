import { createContext, FC, ProviderProps, useContext } from "react";
import { WithId } from '../../utils';
import { Review } from "../Review/ReviewContext";

export interface Resources {
  resources: WithId<Review>[];
}

const initialValue: Resources = {
  resources: [],
};

const resourcesContext = createContext<Resources>(initialValue);

export const useResources = () => useContext(resourcesContext);

export const ResourcesProvider: FC<ProviderProps<Resources>> = (props) => (
  <resourcesContext.Provider {...props} />
);
