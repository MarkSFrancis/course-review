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
