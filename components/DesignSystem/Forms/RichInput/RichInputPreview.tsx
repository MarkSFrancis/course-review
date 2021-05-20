import { Slate, withReact, ReactEditor } from "slate-react";
import { createEditor } from "slate";
import React, { FC, useMemo } from "react";
import { RichTextRender, RichTextRenderProps } from "./RichTextRender";
import { RichInputElement } from "./utils";

export interface RichInputPreviewProps {
  value: RichInputElement[];
}

export const RichInputPreview: FC<RichInputPreviewProps & RichTextRenderProps> =
  (props) => {
    const editor = useMemo(() => withReact(createEditor() as ReactEditor), []);

    const { value, ...editorProps } = props;
    let renderValue = value;

    if (!value || value.length === 0) {
      renderValue = defaultValue;
    }

    return (
      <Slate editor={editor} onChange={() => void 0} value={renderValue}>
        <RichTextRender {...editorProps} />
      </Slate>
    );
  };

const defaultValue: RichInputElement[] = [
  {
    type: "paragraph",
    children: [
      {
        text: "",
      },
    ],
  },
];
