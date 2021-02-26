import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import { PageMeta } from "../../components/AppPage";
import { FancyText } from "../../components/Typography";

export default function Course() {
  return (
    <Container py={4} maxW="container.xl">
      <PageMeta />
      <Heading size="lg">
        <FancyText>Course View</FancyText>
      </Heading>
    </Container>
  );
}
