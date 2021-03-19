import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import { useMemo, useState } from "react";

export const TextDisplay = () => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const [value, setValue] = useState([]);

  return <Slate editor={editor} value={value} onChange={setValue}>
    <Editable readOnly placeholder="No comment" />
  </Slate>;
};
