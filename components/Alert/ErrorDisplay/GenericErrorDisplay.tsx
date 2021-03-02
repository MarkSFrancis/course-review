import { Code } from "@chakra-ui/react";
import { FC, ReactElement } from "react";

export const GenericErrorDisplay: FC<{ err: unknown }> = (props) => {
  let serialized: ReactElement;

  if (typeof props.err === "object") {
    serialized = <Code>{JSON.stringify(props.err, undefined, 2)}</Code>;
  }

  return <>{serialized ?? props.err}</>;
};
