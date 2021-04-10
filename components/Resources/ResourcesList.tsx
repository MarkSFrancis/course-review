import { Text } from "design-system";
import React, { FC } from "react";
import { ResourceProvider } from "./ResourceContext";
import { useResources } from "./ResourcesContext";
import { ResourceThumbnail } from "./Resource";

export const ResourceList: FC = () => {
  const { resources } = useResources();

  if (resources.length === 0) {
    return <Text fontSize="lg">No resources have been published yet</Text>;
  }

  return (
    <>
      {resources.map((r) => (
        <ResourceProvider key={r.id} value={r}>
          <ResourceThumbnail />
        </ResourceProvider>
      ))}
    </>
  );
};
