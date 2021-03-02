import { Box, Button, HStack, Text, VStack, Link, Heading } from "@chakra-ui/react";
import React, { FC } from "react";
import { Resource } from "../../../models";
import { AuditCreated } from "../../Audit";

export interface ResourceThumbnailProps {
  resource: Resource;
}

export const ResourceThumbnail: FC<ResourceThumbnailProps> = (props) => {
  return (
    <Box as="article" borderRadius="lg" borderWidth="1px" p={6}>
      <VStack align="stretch" spacing={4}>
        <Heading color="#3182ce" size="lg">{props.resource.title}</Heading>
        <Text isTruncated>
          <AuditCreated value={props.resource}>
            {(addedBy, addedOn) => (
              <>
                Added by {addedBy}, {addedOn}
              </>
            )}
          </AuditCreated>
        </Text>
        <HStack>
          <Link href={props.resource.url} isExternal>
            <Button colorScheme="blue">Visit</Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};
