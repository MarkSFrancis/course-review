import { Box, Menu } from "design-system";
import React, { ReactElement, ReactNode } from "react";
import {
  AutocompleteContext,
  AutocompleteProvider,
} from "./AutocompleteContext";
import { AutocompleteInput } from "./AutocompleteInput";
import { AutocompleteSuggestion } from "./AutocompleteSuggestion";
import { AutocompleteSuggestions } from "./AutocompleteSuggestions";

export type Suggestions =
  | ReactElement<typeof AutocompleteSuggestions>
  | string[];

export interface AutocompleteProps extends AutocompleteContext {
  value: string;
  setValue: (newValue: string) => void;
  children: { input?: ReactNode; suggestions: Suggestions } | Suggestions;
}

const isReactElement = (object: unknown): object is ReactElement => {
  const o = object as ReactElement;
  return "type" in o && "props" in o;
};

const renderSuggestions = (
  suggestions: string[]
): ReactElement<typeof AutocompleteSuggestions> => (
  <AutocompleteSuggestions>
    {suggestions.map((s) => (
      <AutocompleteSuggestion key={s} value={s} />
    ))}
  </AutocompleteSuggestions>
);

const AutocompleteWrapper = (props: AutocompleteProps) => {
  let input: ReactNode;
  if (
    !isReactElement(props.children) &&
    !Array.isArray(props.children) &&
    props.children.input
  ) {
    input = props.children.input;
  } else {
    input = <AutocompleteInput />;
  }

  let suggestions: ReactElement<typeof AutocompleteSuggestions>;
  if (isReactElement(props.children)) {
    suggestions = props.children;
  } else if (Array.isArray(props.children)) {
    suggestions = renderSuggestions(props.children);
  } else if (isReactElement(props.children.suggestions)) {
    suggestions = props.children.suggestions;
  } else {
    suggestions = renderSuggestions(props.children.suggestions);
  }

  return (
    <Menu>
      <Box position="relative">
        <AutocompleteProvider value={{ ...props }}>
          {input}
          {suggestions}
        </AutocompleteProvider>
      </Box>
    </Menu>
  );
};

export const Autocomplete = AutocompleteWrapper as typeof AutocompleteWrapper & {
  Suggestions: typeof AutocompleteSuggestions;
  Input: typeof AutocompleteInput;
  Suggestion: typeof AutocompleteSuggestion;
};

Autocomplete.Input = AutocompleteInput;
Autocomplete.Suggestions = AutocompleteSuggestions;
Autocomplete.Suggestion = AutocompleteSuggestion;
