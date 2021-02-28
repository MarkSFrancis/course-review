import { Container } from "@chakra-ui/react";
import React from "react";
import { Add } from '../../components/Add';
import { PageMeta } from "../../components/AppPage";

export default function AddPage() {
  return (
    <Container py={4} maxW="container.xl">
      <PageMeta title="Add a resource" />
      <Add />
    </Container>
  );
}
