import { VStack } from "@chakra-ui/react";
import { FC, useCallback } from "react";
import { FancyHeading } from "../Typography";
import { AddForm, NewResource } from "./AddResourceForm";
import { Section } from "../Layout";

export const AddResource: FC = () => {
  const publishResource = useCallback((evt: NewResource) => {}, []);

  return (
    <Section>
      <VStack spacing={4} align="stretch">
        <FancyHeading>Add a resource</FancyHeading>
        <AddForm onSubmit={publishResource} />
      </VStack>
    </Section>
  );
};
