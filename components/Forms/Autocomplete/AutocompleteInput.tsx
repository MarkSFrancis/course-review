import { InputProps, useMenuContext, Input } from "@chakra-ui/react";
import React, { FC, LegacyRef } from "react";
import { useAutocompleteContext } from "./AutocompleteContext";

export const AutocompleteInput: FC<Omit<InputProps, "value">> = (props) => {
  const { onChange, onKeyDown, ...rest } = props;
  const menu = useMenuContext();
  const { value, setValue } = useAutocompleteContext();

  const keyMap = {
    Escape: () => menu.onClose(),
    ArrowDown: () => menu.openAndFocusFirstItem(),
  };

  return (
    <Input
      ref={menu.buttonRef as LegacyRef<HTMLInputElement>}
      onChange={(e) => {
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
      }}
      onKeyDown={(e) => {
        keyMap[e.key]?.(e);
        onKeyDown?.(e);
      }}
      autoComplete="off"
      value={value}
      {...rest}
    />
  );
};
