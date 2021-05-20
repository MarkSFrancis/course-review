import {
  Heading,
  ListItem,
  OrderedList,
  UnorderedList,
  Text,
  Code,
} from "design-system";
import React, { FC } from "react";
import { RenderElementProps, RenderLeafProps } from "slate-react";
import { MarkFormat, RichInputElement } from "./types";

export const Element: FC<RenderElementProps> = ({
  attributes,
  children,
  element,
}) => {
  switch ((element as RichInputElement).type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <UnorderedList {...attributes}>{children}</UnorderedList>;
    case "heading-one":
      return (
        <Heading as="h1" {...attributes}>
          {children}
        </Heading>
      );
    case "heading-two":
      return (
        <Heading as="h2" {...attributes}>
          {children}
        </Heading>
      );
    case "list-item":
      return <ListItem {...attributes}>{children}</ListItem>;
    case "numbered-list":
      return <OrderedList {...attributes}>{children}</OrderedList>;
    default:
      return <Text {...attributes}>{children}</Text>;
  }
};

export const Leaf: FC<RenderLeafProps> = ({ attributes, children, leaf }) => {
  const l = leaf as unknown as Record<MarkFormat, boolean>;

  if (l.bold) {
    children = <strong>{children}</strong>;
  }

  if (l.code) {
    children = <Code>{children}</Code>;
  }

  if (l.italic) {
    children = <em>{children}</em>;
  }

  if (l.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
