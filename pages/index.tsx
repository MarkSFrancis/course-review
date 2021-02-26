import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import { PageMeta } from "../components/AppPage";
import { Courses } from "../components/Courses";

export default function Home() {
  return (
    <Container py={4} maxW="container.xl">
      <PageMeta />
      <Courses />
    </Container>
  );
}
