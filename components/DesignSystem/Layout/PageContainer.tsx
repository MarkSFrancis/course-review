import { Container, ContainerProps, forwardRef } from "design-system";
import React from "react";

export const PageContainer = forwardRef<ContainerProps, typeof Container>(
  (props, ref) => <Container p={4} maxW="container.xl" ref={ref} {...props} />
);
