import { forwardRef, Icon, IconProps, useBreakpointValue } from "design-system";
import React from "react";
import { Blob as Blob } from "./Blob";

export interface BlurryBlobsSvgProps extends IconProps {
  blobColors: BlurryBlobColors;
}

export type BlurryBlobColors = [string, string, string, string, string, string, string];

export const BlurryBlobSvg = forwardRef<BlurryBlobsSvgProps, typeof Icon>(
  (props, ref) => {
    const { blobColors, ...iconProps } = props;

    return (
      <Icon
        width={useBreakpointValue({ base: "100%", md: "40vw", lg: "100%" })}
        height="560px"
        viewBox="0 0 528 560"
        preserveAspectRatio="none"
        zIndex={-1}
        xmlns="http://www.w3.org/2000/svg"
        filter="blur(70px)"
        ref={ref}
        {...iconProps}
      >
        <Blob cx="71" cy="61" fill={blobColors[0]} />
        <Blob cx="244" cy="106" r="139" fill={blobColors[1]} />
        <Blob cx="0" cy="291" r="139" fill={blobColors[2]} />
        <Blob cx="80.5" cy="189.5" fill={blobColors[3]} />
        <Blob cx="196.5" cy="317.5" fill={blobColors[4]} />
        <Blob cx="70.5" cy="458.5" fill={blobColors[5]} />
        <Blob cx="426.5" cy="-0.5" fill={blobColors[6]} />
      </Icon>
    );
  }
);
