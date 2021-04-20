import { forwardRef, Box, BoxProps } from "design-system";
import React from "react";
import { BlurryBlobColors, BlurryBlobSvg } from "./BlurryBlobsSvgProps";

export interface BlurryBlobsProps extends BoxProps {
  blobColors: BlurryBlobColors;
}

export const BlurryBlobs = forwardRef<BlurryBlobsProps, typeof Box>(
  (props, ref) => {
    const { blobColors, ...boxProps } = props;

    return (
      <Box position="relative">
        <BlurryBlobSvg position="absolute" blobColors={blobColors} />
        <Box ref={ref} {...boxProps} />
      </Box>
    );
  }
);
