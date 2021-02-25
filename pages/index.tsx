import { Container, Heading } from "@chakra-ui/react";
import { PageMeta } from "../components/AppPage";

export default function Home() {
  return (
    <Container py={4} maxW="container.xl">
      <PageMeta />
      <Heading>Course Review</Heading>
    </Container>
  );
}
