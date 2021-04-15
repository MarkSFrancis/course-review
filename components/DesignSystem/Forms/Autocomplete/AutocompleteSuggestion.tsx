import { forwardRef, MenuItem, MenuItemProps } from "design-system";
import React, { useCallback } from "react";
import { useAutocompleteContext } from "./AutocompleteContext";

export interface AutocompleteSuggestionProps extends MenuItemProps {
  value: string;
}

const shouldShowSuggestion = (inputValue: string, suggestionValue: string) => {
  return new RegExp(inputValue, "i").test(suggestionValue);
};

export const AutocompleteSuggestion = forwardRef<
  AutocompleteSuggestionProps & MenuItemProps,
  typeof MenuItem
>((props, ref) => {
  const { value: inputValue, setValue } = useAutocompleteContext();
  const { onClick, value, ...rest } = props;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setValue(value);
      onClick?.(e);
    },
    [setValue, value, onClick]
  );

  if (!shouldShowSuggestion(inputValue, value)) {
    return <></>;
  }

  return (
    <MenuItem onClick={handleClick} ref={ref} {...rest}>
      {props.children ?? value}
    </MenuItem>
  );
});
