import { MenuListProps, Box, MenuList, useMenuContext } from "design-system";
import React, { FC } from "react";

export const AutocompleteSuggestions: FC<MenuListProps> = (props) => {
  const menu = useMenuContext();

  return (
    <Box position="absolute" minWidth="100%" zIndex="1" top={menu.buttonRef.current?.clientHeight ?? 0}>
      <MenuList {...props} />
    </Box>
  );
};
