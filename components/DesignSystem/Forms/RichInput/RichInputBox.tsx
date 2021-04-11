import { Box, BoxProps, forwardRef, useColorModeValue } from "design-system";
import React from "react";

export const RichInputBox = forwardRef<BoxProps, typeof Box>((props, ref) => {
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.300");

  return (
    <Box
      border="1px"
      borderRadius="lg"
      borderColor={borderColor}
      ref={ref}
      {...props}
    />
  );
});
