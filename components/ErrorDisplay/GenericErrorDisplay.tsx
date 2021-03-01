import { Code } from "@chakra-ui/react";
import { FC, ReactElement } from "react";

export const GenericErrorDisplay: FC = (props) => {
  let serialized: ReactElement;

  if (typeof props.children === "object") {
    serialized = <Code>JSON.stringify(props.children, undefined, 2)</Code>;
  }

  return <>{serialized ?? props.children}</>;
};
