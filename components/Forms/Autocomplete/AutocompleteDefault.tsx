import { InputGroup } from "@chakra-ui/input";
import React from "react";
import { useAutocompleteContext } from "./AutocompleteContext";
import { AutocompleteDropdown } from "./AutocompleteDropdown";
import { AutocompleteInput } from "./AutocompleteInput";
import { AutocompleteSuggestion } from "./AutocompleteSuggestion";
import { AutocompleteSuggestions } from "./AutocompleteSuggestions";

export const AutocompleteDefault = () => {
  const { suggestions } = useAutocompleteContext();

  return (
    <>
      <InputGroup>
        <AutocompleteInput />
        <AutocompleteDropdown />
      </InputGroup>
      <AutocompleteSuggestions>
        {suggestions.map((s) => (
          <AutocompleteSuggestion key={s} value={s} />
        ))}
      </AutocompleteSuggestions>
    </>
  );
};
