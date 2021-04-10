import { TextProps, Text, forwardRef } from "design-system";

export const FancyText = forwardRef<TextProps, "span">((props, ref) => (
  <Text
    bgClip="text"
    bgGradient="linear(to-l, #c259ff, #ff0080)"
    ref={ref}
    as="span"
    {...props}
  ></Text>
));
