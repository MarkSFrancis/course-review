import { Container } from "@chakra-ui/react";
import React from "react";
import { PageMeta } from "../../components/AppPage";
import { FancyHeading } from "../../components/Typography";

export default function Tags() {
  return (
    <Container py={4} maxW="container.xl">
      <PageMeta />
      <FancyHeading size="lg">Tags</FancyHeading>
    </Container>
  );
}
