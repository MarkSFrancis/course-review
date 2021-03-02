import { createContext, FC, ProviderProps, useContext } from "react";
import { Resource } from '../../models';
import { WithId } from '../../utils';

export interface Resources {
  resources: WithId<Resource>[];
}

const initialValue: Resources = {
  resources: [],
};

const resourcesContext = createContext<Resources>(initialValue);

export const useResources = () => useContext(resourcesContext);

export const ResourcesProvider: FC<ProviderProps<Resources>> = (props) => (
  <resourcesContext.Provider {...props} />
);
