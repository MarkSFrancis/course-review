import { ResourcesProvider } from "./ResourcesContext";
import { ResourceList } from "./ResourcesList";
import React from "react";
import { useFirestoreCollection } from "../../utils";
import { Section } from "../Layout";
import { QueryGuard } from "../Query";
import { FancyHeading } from "../Typography";
import { VStack } from "design-system";
import { Resource } from "../../models";
import { SkeletonResource } from "./Resource/SkeletonResource";

export const Resources = () => {
  const query = useFirestoreCollection<Resource>((db) =>
    db.collection("resources").orderBy("createdOn", "desc").limit(20)
  );

  return (
    <Section>
      <VStack spacing={4} align="stretch">
        <FancyHeading>Resources</FancyHeading>
        <QueryGuard spinner={<SkeletonResource />} query={query}>
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
