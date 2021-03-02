import { Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { ResourceProvider } from "./ResourceContext";
import { useResources } from "./ResourcesContext";
import { ResourceThumbnail } from "./ResourceThumbnail";

export const ResourceList: FC = () => {
  const { resources } = useResources();

  if (resources.length === 0) {
    return <Text fontSize="lg">No resources have been published yet</Text>;
  }

  return (
    <>
      {resources.map((r) => (
        <ResourceProvider value={r}>
          <ResourceThumbnail key={r.id} />
        </ResourceProvider>
      ))}
    </>
  );
};
