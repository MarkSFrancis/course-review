import { Editable, useSlateStatic } from "slate-react";
import React, { FC, useCallback } from "react";
import {
  EditableProps,
  RenderElementProps,
  RenderLeafProps,
} from "slate-react/dist/components/editable";
import { Element, Leaf } from "./utils/elements";
import { onRichTextKeyDown } from "./utils/shortcuts";

export type RichTextRenderProps = Omit<EditableProps, "value" | "onChange">;

export const RichTextRender: FC<RichTextRenderProps> = (props) => {
  const editor = useSlateStatic();

  const { onKeyDown, readOnly, ...editorProps } = props;

  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    []
  );

  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!readOnly) {
        onRichTextKeyDown(editor, e);
      }
      onKeyDown?.(e);
    },
    [onKeyDown, readOnly, editor]
  );

  return (
    <Editable
      renderElement={renderElement}
      renderLeaf={renderLeaf}
      onKeyDown={handleKeyDown}
      readOnly={readOnly}
      {...editorProps}
    />
  );
};
