import { HStack, Switch, useColorMode } from "design-system";
import { SunIcon, MoonIcon } from "design-system";
import { FC } from "react";

export const ThemeToggle: FC = () => {
  const theme = useColorMode();

  return (
    <HStack>
      <MoonIcon />
      <Switch
        isChecked={theme.colorMode === "light"}
        onChange={() => theme.toggleColorMode()}
      />
      <SunIcon />
    </HStack>
  );
};
