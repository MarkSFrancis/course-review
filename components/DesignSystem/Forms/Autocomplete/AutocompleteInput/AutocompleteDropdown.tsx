import { Tooltip } from "@chakra-ui/tooltip";
import { ChevronUpIcon, ChevronDownIcon } from "design-system";
import {
  useMenuContext,
  IconButton,
  InputRightAddon,
  InputAddonProps,
  forwardRef,
} from "design-system";

export const AutocompleteDropdown = forwardRef<
  InputAddonProps,
  typeof InputRightAddon
>((props, ref) => {
  const menu = useMenuContext();

  const label = `${menu.isOpen ? "Hide" : "Show"} autocomplete suggestions`;

  return (
    <Tooltip label={label}>
      <InputRightAddon
        as={IconButton}
        ref={ref}
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={menu.isOpen}
        aria-controls={menu.menuId}
        id={menu.buttonId}
        icon={menu.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        onClick={() => (menu.isOpen ? menu.onClose() : menu.onOpen())}
        {...props}
      />
    </Tooltip>
  );
});
