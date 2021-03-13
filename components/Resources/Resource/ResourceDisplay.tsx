import { Box, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { ResourceAudit } from "./ResourceAudit";
import { ResourceTitle } from "./ResourceTitle";
import { ResourceLink } from "./ResourceLink";

export const ResourceDisplay: FC = () => (
  <Box as="article">
    <VStack align="stretch" spacing={4}>
      <ResourceTitle fancy />
      <ResourceAudit />
      <ResourceLink />
    </VStack>
  </Box>
);
