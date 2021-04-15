import { InputGroup } from "design-system";
import React, { FC } from "react";
import { AutocompleteDropdown } from "./AutocompleteDropdown";
import {
  AutocompleteInputElement,
  AutocompleteInputElementProps,
} from "./AutocompleteInputElement";

const AutocompleteInputWrapper: FC<AutocompleteInputElementProps> = (props) => (
  <InputGroup>
    <AutocompleteInputElement {...props} />
    <AutocompleteDropdown />
  </InputGroup>
);

export const AutocompleteInput = AutocompleteInputWrapper as typeof AutocompleteInputWrapper & {
  Group: typeof InputGroup;
  Input: typeof AutocompleteInputElement;
  Dropdown: typeof AutocompleteDropdown;
};

AutocompleteInput.Group = InputGroup;
AutocompleteInput.Input = AutocompleteInput;
AutocompleteInput.Dropdown = AutocompleteDropdown;
