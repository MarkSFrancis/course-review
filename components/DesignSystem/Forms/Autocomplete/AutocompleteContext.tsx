import { createContext, useContext } from "react";

export interface AutocompleteContext {
  value: string;
  setValue: (newValue: string) => void;
}

const context = createContext<AutocompleteContext>(
  undefined
);

export const AutocompleteProvider = context.Provider;
export const useAutocompleteContext = () => useContext(context);
