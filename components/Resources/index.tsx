import { ResourcesProvider } from "./ResourcesContext";
import { ResourceList } from "./ResourcesList";
import React from "react";
import { useFirestoreQueryCollection } from "../../utils";
import { Section } from "../Layout";
import { QueryGuard } from "../Query";
import { FancyHeading } from "../Typography";
import { VStack } from "@chakra-ui/react";
import { Resource } from "../../models";

export const Resources = () => {
  const query = useFirestoreQueryCollection<Resource>((db) =>
    db.collection("resources").orderBy("createdOn").limit(20)
  );

  return (
    <Section>
      <VStack spacing={4} align="stretch">
        <FancyHeading>Resources</FancyHeading>
        <QueryGuard query={query}>
          {({ value }) => (
            <ResourcesProvider value={{ resources: value }}>
              <ResourceList />
            </ResourcesProvider>
          )}
        </QueryGuard>
      </VStack>
    </Section>
  );
};
