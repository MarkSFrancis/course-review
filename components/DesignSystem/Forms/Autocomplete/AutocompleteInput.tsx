import { InputProps, useMenuContext, Input } from "design-system";
import React, { ChangeEvent, FC, LegacyRef, useCallback } from "react";
import { useAutocompleteContext } from "./AutocompleteContext";

export const AutocompleteInput: FC<Omit<InputProps, "value">> = (props) => {
  const { onChange, onKeyDown, ...rest } = props;
  const menu = useMenuContext();
  const { value, setValue } = useAutocompleteContext();

  const keyMap = {
    Escape: () => menu.onClose(),
    ArrowDown: () => menu.openAndFocusFirstItem(),
  };

  const onChangeCallback = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!menu.isOpen) {
        if (e.target.value) {
          menu.onOpen();
        }
      } else {
        // Hack due to bad focus logic within chakra-ui
        setTimeout(() => {
          menu.buttonRef.current?.focus();
        }, 0);
      }
      setValue?.(e.target.value);
      onChange?.(e);
    },
    [menu, onChange, setValue]
  );

  return (
    <Input
      // Chakra UI restores focus to the button after an item is selected
      ref={menu.buttonRef as LegacyRef<HTMLInputElement>}
      onChange={onChangeCallback}
      onKeyDown={(e) => {
        keyMap[e.key]?.(e);
        onKeyDown?.(e);
      }}
      autoComplete="off"
      value={value}
      borderRightRadius={0}
      {...rest}
    />
  );
};
