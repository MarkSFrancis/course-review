import { createContext, FC, ProviderProps, useContext } from "react";
import { Resource } from "../../models";
import { WithId } from "../../utils";

const resourceContext = createContext<WithId<Resource>>(undefined);

export const useResource = () => useContext(resourceContext);

export const ResourceProvider: FC<ProviderProps<WithId<Resource>>> = (props) => (
  <resourceContext.Provider {...props} />
);
