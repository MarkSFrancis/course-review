import { Heading, HStack, Tag } from "@chakra-ui/react";
import React, { FC } from "react";
import { useResource } from "../ResourceContext";

export const ResourceHeading: FC = () => {
  const { title, resourceType } = useResource();

  return (
    <HStack justifyContent="space-between">
      <Heading color="#3182ce" size="lg">
        {title}
      </Heading>
      <Tag size="lg" borderRadius="full">{resourceType}</Tag>
    </HStack>
  );
};
