import { Container, ContainerProps, forwardRef } from "@chakra-ui/react";
import React from "react";
import { BlurryBlobsBox } from "./Background";

export const PageContainer = forwardRef<ContainerProps, typeof Container>(
  (props, ref) => (
    <BlurryBlobsBox>
      <Container p={4} maxW="container.xl" ref={ref} {...props} />
    </BlurryBlobsBox>
  )
);
