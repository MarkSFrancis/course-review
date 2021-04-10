import { Box, VStack } from "design-system";
import React, { FC } from "react";
import { ResourceAudit } from "./ResourceAudit";
import { ResourceTitle } from "./ResourceTitle";
import { ResourceLink } from "./ResourceLink";
import { Section } from "../../Layout";

export const ResourceDisplay: FC = () => (
  <Section as="article">
    <VStack align="stretch" spacing={4}>
      <ResourceTitle fancy />
      <ResourceAudit />
      <ResourceLink />
    </VStack>
  </Section>
);
