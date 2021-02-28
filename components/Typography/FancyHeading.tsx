import { TextProps, Heading, forwardRef } from "@chakra-ui/react";
import { FancyText } from "./FancyText";

export const FancyHeading = forwardRef<TextProps, "span">((props, ref) => (
  <Heading ref={ref} {...props}>
    <FancyText>{props.children}</FancyText>
  </Heading>
));
