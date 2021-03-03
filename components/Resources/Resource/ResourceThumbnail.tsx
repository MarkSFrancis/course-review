import { Box, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { SecondaryHeading } from "../../Typography";
import { ResourceAudit } from "./ResourceAudit";
import { ResourceTitle } from "./ResourceTitle";
import { ResourceLink } from "./ResourceLink";

export const ResourceThumbnail: FC = () => (
  <Box as="article" borderRadius="lg" borderWidth="1px" p={6}>
    <VStack align="stretch" spacing={4}>
      <SecondaryHeading>
        <ResourceTitle />
      </SecondaryHeading>
      <ResourceAudit />
      <ResourceLink linkToDetails />
    </VStack>
  </Box>
);
