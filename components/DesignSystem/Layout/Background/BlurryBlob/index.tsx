import { forwardRef, Box, BoxProps } from "design-system";
import React from "react";
import { BlurryBlobSvg } from "./BlurryBlobSvg";

export const BlurryBlobsBox = forwardRef<BoxProps, typeof Box>((props, ref) => (
  <Box position="relative">
    <BlurryBlobSvg position="absolute" />
    <Box ref={ref} {...props} />
  </Box>
));
