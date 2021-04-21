import React, { FC } from "react";
import { useFirestoreDoc } from "../../../utils";
import { QueryGuard } from "../../Query";
import { VStack } from "design-system";
import { Resource as ResourceDb } from "../../../models";
import { ResourceProvider } from "../ResourceContext";
import { ResourceDisplay } from "./ResourceDisplay";
import { SkeletonResource } from "./SkeletonResource";
import { Reviews } from "components/Reviews";

export * from "./ResourceThumbnail";

export interface ResourceProps {
  id: string;
}

export const Resource: FC<ResourceProps> = (props) => {
  const resourceQuery = useFirestoreDoc<ResourceDb>((db) =>
    db.doc(`resources/${props.id}`)
  );

  return (
    <VStack spacing={4} align="stretch">
      <QueryGuard query={resourceQuery} spinner={<SkeletonResource />}>
        {({ value: resource }) => (
          <ResourceProvider value={resource}>
            <ResourceDisplay />
          </ResourceProvider>
        )}
      </QueryGuard>
      <Reviews resourceId={props.id} resourceQuery={resourceQuery} />
    </VStack>
  );
};
