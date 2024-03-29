import { BaseElement, Text } from "slate";

export type MarkFormat = "bold" | "code" | "italic" | "underline";
export type BlockFormat =
  | "block-quote"
  | "heading-one"
  | "heading-two"
  | "list-item"
  | "bulleted-list"
  | "numbered-list"
  | "paragraph"
  | "";

export const ListTypes: BlockFormat[] = ["numbered-list", "bulleted-list"];

export interface RichInputElement extends BaseElement {
  type: BlockFormat;
}
