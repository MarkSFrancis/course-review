import { MenuItem } from "@chakra-ui/menu";
import { MenuItemProps } from "@chakra-ui/react";
import { forwardRef } from "@chakra-ui/system";
import React, { useCallback } from "react";
import { useAutocompleteContext } from "./AutocompleteContext";

export interface AutocompleteSuggestionProps {
  value: string;
}

export const AutocompleteSuggestion = forwardRef<
  AutocompleteSuggestionProps & MenuItemProps,
  typeof MenuItem
>((props, ref) => {
  const { setValue } = useAutocompleteContext();
  const { onClick, value, ...rest } = props;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setValue(value);
      onClick?.(e);
    },
    [setValue, value, onClick]
  );

  return (
    <MenuItem onClick={handleClick} ref={ref} {...rest}>
      {props.children ?? value}
    </MenuItem>
  );
});
