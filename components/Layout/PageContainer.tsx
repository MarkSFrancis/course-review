import { Container, ContainerProps, forwardRef } from "@chakra-ui/react";

export const PageContainer = forwardRef<ContainerProps, typeof Container>(
  (props, ref) => <Container py={4} maxW="container.xl" ref={ref} {...props} />
);
