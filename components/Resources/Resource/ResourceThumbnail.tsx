import { Box, VStack } from "design-system";
import React, { FC } from "react";
import { ResourceAudit } from "./ResourceAudit";
import { ResourceTitle } from "./ResourceTitle";
import { ResourceLink } from "./ResourceLink";
import { Section } from "../../Layout";

export const ResourceThumbnail: FC = () => (
  <Section as="article">
    <VStack align="stretch" spacing={4}>
      <ResourceTitle />
      <ResourceAudit />
      <ResourceLink linkToDetails />
    </VStack>
  </Section>
);
