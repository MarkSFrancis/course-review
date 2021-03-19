import {
  IconBlockquote,
  IconBold,
  IconCode,
  IconH1,
  IconH2,
  IconItalic,
  IconList,
  IconNumber1,
  IconUnderline,
} from "@tabler/icons";
import React, { FC } from "react";
import { Toolbar } from "./Toolbar";
import { BlockButton, MarkButton } from "./ToolbarButton";

export const DefaultToolbar: FC = () => (
  <Toolbar>
    <MarkButton format="bold" aria-label="Bold" icon={<IconBold />} />
    <MarkButton format="italic" aria-label="Italic" icon={<IconItalic />} />
    <MarkButton
      format="underline"
      aria-label="Underline"
      icon={<IconUnderline />}
    />
    <MarkButton format="code" aria-label="Code" icon={<IconCode />} />
    <BlockButton
      format="heading-one"
      aria-label="Large heading"
      icon={<IconH1 />}
    />
    <BlockButton
      format="heading-two"
      aria-label="Medium heading"
      icon={<IconH2 />}
    />
    <BlockButton
      format="block-quote"
      aria-label="Quote"
      icon={<IconBlockquote />}
    />
    <BlockButton
      format="numbered-list"
      aria-label="Numbered list"
      icon={<IconNumber1 />}
    />
    <BlockButton
      format="bulleted-list"
      aria-label="Bulleted list"
      icon={<IconList />}
    />
  </Toolbar>
);
