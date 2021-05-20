import { Slate, withReact, ReactEditor } from "slate-react";
import { createEditor } from "slate";
import React, { FC, useMemo } from "react";
import { DefaultToolbar } from "./DefaultToolbar";
import { Toolbar } from "./Toolbar";
import { Box, BoxProps, Divider } from "design-system";
import { RichTextRender } from "./RichTextRender";
import { RichInputBox } from "./RichInputBox";
import { RichInputElement } from "./utils";

export interface RichInputProps {
  toolbar?: typeof Toolbar;
  value: RichInputElement[];
  onChange: (nodes: RichInputElement[]) => void;
}

export const RichInput: FC<RichInputProps & Omit<BoxProps, "onChange">> = (
  props
) => {
  const editor = useMemo(() => withReact(createEditor() as ReactEditor), []);

  const { value, onChange, children, toolbar, ...boxProps } = props;

  return (
    <RichInputBox {...boxProps}>
      <Slate
        editor={editor}
        value={value ?? defaultValue}
        onChange={(newValue: RichInputElement[]) => onChange?.(newValue)}
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

export const defaultValue: RichInputElement[] = [
  {
    type: "paragraph",
    children: [
      {
        text: "",
      },
    ],
  },
];
