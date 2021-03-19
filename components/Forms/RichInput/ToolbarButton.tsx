import { IconButton, IconButtonProps } from "@chakra-ui/button";
import { forwardRef } from "@chakra-ui/system";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import { useEditor } from "slate-react";
import {
  BlockFormat,
  isBlockActive,
  isMarkActive,
  MarkFormat,
  toggleBlock,
  toggleMark,
} from "./utils";

export interface MarkOptions {
  format: MarkFormat;
}

export interface BlockOptions {
  format: BlockFormat;
}

export const MarkButton = forwardRef<
  IconButtonProps & MarkOptions,
  typeof IconButton
>((props, ref) => {
  const editor = useEditor();
  const { format, onMouseDown, ...iconProps } = props;
  const isActive = isMarkActive(editor, { format });

  return (
    <Tooltip label={props["aria-label"]}>
      <IconButton
        ref={ref}
        colorScheme={isActive ? "blue" : undefined}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleMark(editor, { format });
          onMouseDown?.(e);
        }}
        {...iconProps}
      />
    </Tooltip>
  );
});

export const BlockButton = forwardRef<
  IconButtonProps & BlockOptions,
  typeof IconButton
>((props, ref) => {
  const editor = useEditor();
  const { format, onMouseDown, ...iconProps } = props;
  const isActive = isBlockActive(editor, { format });

  return (
    <Tooltip label={props["aria-label"]}>
      <IconButton
        ref={ref}
        colorScheme={isActive ? "blue" : undefined}
        onMouseDown={(e) => {
          e.preventDefault();
          toggleBlock(editor, { format });
          onMouseDown?.(e);
        }}
        {...iconProps}
      />
    </Tooltip>
  );
});
