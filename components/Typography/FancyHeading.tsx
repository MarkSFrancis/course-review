import { Heading, forwardRef, HeadingProps } from "@chakra-ui/react";
import { FancyText } from "./FancyText";

export const FancyHeading = forwardRef<HeadingProps, "span">((props, ref) => (
  <Heading size="lg" ref={ref} {...props}>
    <FancyText>{props.children}</FancyText>
  </Heading>
));
