import { Slate, withReact } from "slate-react";
import { createEditor, Node } from "slate";
import React, { FC, useMemo } from "react";
import { RichTextRender, RichTextRenderProps } from "./RichTextRender";
import { RichInputBox } from "./RichInputBox";

export interface RichInputPreviewProps {
  value: Node[];
}

export const RichInputPreview: FC<
  RichInputPreviewProps & RichTextRenderProps
> = (props) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const { value, ...editorProps } = props;
  let renderValue = value;

  if (!value || value.length === 0) {
    renderValue = defaultValue;
  }

  return (
    <RichInputBox>
      <Slate editor={editor} onChange={() => {}} value={renderValue}>
        <RichTextRender {...editorProps} />
      </Slate>
    </RichInputBox>
  );
};

const defaultValue: Node[] = [
  {
    type: "text",
    children: [
      {
        text: "",
      },
    ],
  },
];
