import { Box, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { FancyHeading } from "../../Typography";
import { ResourceAudit } from "./ResourceAudit";
import { ResourceTitle } from "./ResourceTitle";
import { ResourceLink } from "./ResourceLink";

export const ResourceDisplay: FC = () => (
  <Box as="article">
    <VStack align="stretch" spacing={4}>
      <FancyHeading>
        <ResourceTitle />
      </FancyHeading>
      <ResourceAudit />
      <ResourceLink />
    </VStack>
  </Box>
);
