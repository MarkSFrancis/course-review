import { forwardRef, Box, BoxProps } from "design-system";
import React from "react";
import { BlobsSvg } from "./BlobsSvg";
import { BlobColors } from "./colors";

export * from "./colors";

export interface BlobsBackgroundProps extends BoxProps {
  blobColors: BlobColors;
}

export const BlobsBackground = forwardRef<BlobsBackgroundProps, typeof Box>(
  (props, ref) => {
    const { blobColors, ...boxProps } = props;

    return (
      <Box position="relative">
        <BlobsSvg position="absolute" blobColors={blobColors} />
        <Box ref={ref} {...boxProps} />
      </Box>
    );
  }
);
