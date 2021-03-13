import { MenuListProps, Box, MenuList, useMenuContext } from "@chakra-ui/react";
import React, { FC } from "react";

export interface AutocompleteSuggestionsProps {
  max?: number;
}

export const AutocompleteSuggestions: FC<
  MenuListProps & AutocompleteSuggestionsProps
> = (props) => {
  const menu = useMenuContext();

  return (
    <Box position="absolute" top={menu.buttonRef.current?.clientHeight}>
      <MenuList {...props} />
    </Box>
  );
};
