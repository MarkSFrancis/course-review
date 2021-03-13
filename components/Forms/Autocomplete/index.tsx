import { Box, Menu } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import {
  AutocompleteContext,
  AutocompleteProvider,
} from "./AutocompleteContext";
import { AutocompleteDefault } from "./AutocompleteDefault";
import { AutocompleteInput } from "./AutocompleteInput";
import { AutocompleteDropdown } from "./AutocompleteDropdown";
import { AutocompleteSuggestion } from "./AutocompleteSuggestion";
import { AutocompleteSuggestions } from "./AutocompleteSuggestions";

export interface AutocompleteProps extends AutocompleteContext {
  value: string;
  setValue: (newValue: string) => void;
  children?: ReactNode;
}

const AutocompleteWrapper = (props: AutocompleteProps) => {
  return (
    <Menu>
      <Box position="relative">
        <AutocompleteProvider value={{ ...props }}>
          {props.children ?? <AutocompleteDefault />}
        </AutocompleteProvider>
      </Box>
    </Menu>
  );
};

export const Autocomplete = AutocompleteWrapper as typeof AutocompleteWrapper & {
  Suggestions: typeof AutocompleteSuggestions;
  Input: typeof AutocompleteInput;
  Dropdown: typeof AutocompleteDropdown;
  Suggestion: typeof AutocompleteSuggestion;
};

Autocomplete.Input = AutocompleteInput;
Autocomplete.Suggestions = AutocompleteSuggestions;
Autocomplete.Suggestion = AutocompleteSuggestion;
Autocomplete.Dropdown = AutocompleteDropdown;
