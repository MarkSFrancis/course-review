import isHotkey from "is-hotkey";
import { Editor } from "slate";
import { toggleMark } from "./marks";

const markHotkeys = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

export const onRichTextKeyDown = (
  editor: Editor,
  e: React.KeyboardEvent<HTMLDivElement>
) => {
  for (const markHotkey in markHotkeys) {
    if (isHotkey(markHotkey, (e as unknown) as KeyboardEvent)) {
      e.preventDefault();
      const format = markHotkeys[markHotkey];
      toggleMark(editor, { format });
    }
  }
};
