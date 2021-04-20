import { Slate, withReact } from "slate-react";
import { createEditor, Node } from "slate";
import React, { FC, useMemo } from "react";
import { DefaultToolbar } from "./DefaultToolbar";
import { Toolbar } from "./Toolbar";
import { Box, BoxProps, Divider, useColorModeValue } from "design-system";
import { RichTextRender } from "./RichTextRender";
import { RichInputBox } from "./RichInputBox";

export interface RichInputProps {
  toolbar?: typeof Toolbar;
  value: Node[];
  onChange: (nodes: Node[]) => void;
}

export const RichInput: FC<RichInputProps & Omit<BoxProps, "onChange">> = (
  props
) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const { value, onChange, children, toolbar, onKeyDown, ...boxProps } = props;

  const borderColor = useColorModeValue("gray.200", "whiteAlpha.300");

  return (
    <RichInputBox {...boxProps}>
      <Slate
        editor={editor}
        value={value ?? defaultValue}
        onChange={(newValue) => onChange(newValue)}
      >
        <Box padding="3">{toolbar ?? <DefaultToolbar />}</Box>
        <Divider />

        {children ?? (
          <Box padding={3}>
            <RichTextRender />
          </Box>
        )}
      </Slate>
    </RichInputBox>
  );
};

export const defaultValue: Node[] = [
  {
    type: "text",
    children: [
      {
        text: "",
      },
    ],
  },
];
