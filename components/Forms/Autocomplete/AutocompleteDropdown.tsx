import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  useMenuContext,
  IconButton,
  InputRightAddon,
  InputAddonProps,
  forwardRef,
} from "@chakra-ui/react";

export const AutocompleteDropdown = forwardRef<
  InputAddonProps,
  typeof InputRightAddon
>((props, ref) => {
  const menu = useMenuContext();

  return (
    <InputRightAddon
      as={IconButton}
      ref={ref}
      aria-label="Show autocomplete suggestions"
      icon={menu.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      onClick={() => (menu.isOpen ? menu.onClose() : menu.onOpen())}
      {...props}
    />
  );
});
