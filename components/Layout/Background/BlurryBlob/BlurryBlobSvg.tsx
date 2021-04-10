import { forwardRef, Icon, IconProps, useBreakpointValue } from "design-system";
import React from "react";
import { Blob as Blob } from "./Blob";

export const BlurryBlobSvg = forwardRef<IconProps, typeof Icon>(
  (props, ref) => (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "100%" })}
      height="560px"
      viewBox="0 0 528 560"
      preserveAspectRatio="none"
      zIndex={-1}
      xmlns="http://www.w3.org/2000/svg"
      filter="blur(70px)"
      ref={ref}
      {...props}
    >
      <Blob cx="71" cy="61" fill="rgba(245, 101, 101, 0.6)" />
      <Blob cx="244" cy="106" r="139" fill="rgba(237, 100, 166, 0.6)" />
      <Blob cx="0" cy="291" r="139" fill="rgba(237, 100, 166, 0.6)" />
      <Blob cx="80.5" cy="189.5" fill="rgba(237, 137, 54, 0.6)" />
      <Blob cx="196.5" cy="317.5" fill="rgba(236, 201, 75, 0.6)" />
      <Blob cx="70.5" cy="458.5" fill="rgba(72, 187, 120, 0.6)" />
      <Blob cx="426.5" cy="-0.5" fill="rgba(66, 153, 225, 0.6)" />
    </Icon>
  )
);
