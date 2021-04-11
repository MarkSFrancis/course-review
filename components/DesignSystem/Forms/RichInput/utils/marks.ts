import { Editor } from "slate";
import { MarkOptions } from "../ToolbarButton";

/**
 * Slate change handler
 */
type SC<TResult = void> = (editor: Editor, options: MarkOptions) => TResult;

export const isMarkActive: SC<boolean> = (editor, options) => {
  const marks = Editor.marks(editor);
  return marks?.[options.format] === true;
};

export const toggleMark: SC = (editor, options) => {
  if (isMarkActive(editor, options)) {
    disableMark(editor, options);
  } else {
    enableMark(editor, options);
  }
};

export const enableMark: SC = (editor, options) => {
  editor.addMark(options.format, true);
};

export const disableMark: SC = (editor, options) => {
  editor.removeMark(options.format);
};
