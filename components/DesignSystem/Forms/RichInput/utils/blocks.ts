import { Editor, Element as SlateElement, Text, Transforms } from "slate";
import { BlockOptions } from "../ToolbarButton";
import { BlockFormat, ListTypes } from "./types";

/**
 * Slate change handler
 */
type SC<TResult = void> = (editor: Editor, options: BlockOptions) => TResult;

export const isBlockActive: SC<boolean> = (
  editor: Editor,
  options: BlockOptions
) => {
  const matches = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      n.type === options.format,
  });

  const match = matches.next();

  return !!match?.value;
};

export const toggleBlock: SC = (editor, options) => {
  if (isBlockActive(editor, options)) {
    disableBlock(editor, options);
  } else {
    enableBlock(editor, options);
  }
};

export const enableBlock: SC = (editor, options) => {
  const isList = ListTypes.includes(options.format);

  if (isList) {
    enableListBlock(editor, options);
  } else {
    enableNonListBlock(editor, options);
  }
};

export const disableBlock: SC = (editor) => {
  removeListWrapper(editor);
  Transforms.setNodes(editor, { type: "paragraph" });
};

const isElement = (node: SlateElement | Text): node is SlateElement =>
  !Editor.isEditor(node) && SlateElement.isElement(node);

const removeListWrapper = (editor: Editor) => {
  // Removes all existing list wrappers
  Transforms.unwrapNodes(editor, {
    match: (n) => ListTypes.includes(isElement(n) && (n.type as BlockFormat)),
    split: true,
  });
};

const enableListBlock: SC = (editor, options) => {
  removeListWrapper(editor);
  Transforms.setNodes(editor, { type: "list-item" });

  const block: SlateElement = { type: options.format, children: [] };
  Transforms.wrapNodes(editor, block);
};

const enableNonListBlock: SC = (editor, options) => {
  removeListWrapper(editor);
  Transforms.setNodes(editor, { type: options.format });
};
