import { VStack } from "@chakra-ui/react";
import { FC, useCallback } from "react";
import { FancyHeading } from "../Typography";
import { AddForm } from "./AddResourceForm";
import { Section } from "../Layout";

export const Add: FC = () => {
  const publishResource = useCallback(() => {
    
  }, []);

  return (
    <Section>
      <VStack spacing={4} align="stretch">
        <FancyHeading>Add a resource</FancyHeading>
        <AddForm onSubmit={() => {}} />
      </VStack>
    </Section>
  );
};
