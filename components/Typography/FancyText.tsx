import { TextProps, Text, forwardRef } from "@chakra-ui/react";

export const FancyText = forwardRef<TextProps, "span">((props, ref) => (
  <Text
    bgClip="text"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    ref={ref}
    as="span"
    {...props}
  ></Text>
));
