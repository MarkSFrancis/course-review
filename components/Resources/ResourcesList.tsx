import { Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { useResources } from "./ResourcesContext";

export const ResourceList: FC = () => {
  const { resources } = useResources();

  if (resources.length === 0) {
    return <Text fontSize="lg">No resources have been published yet</Text>;
  }

  return (
    <>
      {resources.map((c) => (
        <Text key={c.id}>{c.title}</Text>
      ))}
    </>
  );
};
