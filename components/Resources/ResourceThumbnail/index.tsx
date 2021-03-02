import { Box, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { ResourceAudit } from "./ResourceAudit";
import { ResourceHeading } from "./ResourceHeading";
import { ResourceLink } from "./ResourceLink";

export const ResourceThumbnail: FC = () => (
  <Box as="article" borderRadius="lg" borderWidth="1px" p={6}>
    <VStack align="stretch" spacing={4}>
      <ResourceHeading />
      <ResourceAudit />
      <ResourceLink />
    </VStack>
  </Box>
);
