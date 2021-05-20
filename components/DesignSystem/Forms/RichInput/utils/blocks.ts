import { Editor, Element as SlateElement, Text, Transforms } from "slate";
import { BlockOptions } from "../ToolbarButton";
import { ListTypes, RichInputElement } from "./types";

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
      (n as RichInputElement).type === options.format,
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
  const newNode: RichInputElement = {
    type: "paragraph",
    children: [],
  };
  Transforms.setNodes(editor, newNode);
};

const isElement = (node: SlateElement | Text): node is SlateElement =>
  !Editor.isEditor(node) && SlateElement.isElement(node);

const removeListWrapper = (editor: Editor) => {
  // Removes all existing list wrappers
  Transforms.unwrapNodes(editor, {
    match: (n) =>
      ListTypes.includes(isElement(n) && (n as RichInputElement).type),
    split: true,
  });
};

const enableListBlock: SC = (editor, options) => {
  removeListWrapper(editor);
  const newNode: RichInputElement = {
    type: "list-item",
    children: [],
  };
  Transforms.setNodes(editor, newNode);

  const childNode: RichInputElement = {
    type: options.format,
    children: [],
  };

  const block: SlateElement = childNode;
  Transforms.wrapNodes(editor, block);
};

const enableNonListBlock: SC = (editor, options) => {
  removeListWrapper(editor);

  const newNode: RichInputElement = {
    type: options.format,
    children: [],
  };

  Transforms.setNodes(editor, newNode);
};
