import React, { FC } from "react";
import { useFirestoreCollection, useFirestoreDoc } from "../../../utils";
import { Section } from "../../Layout";
import { QueriesGuard } from "../../Query";
import { Divider, VStack } from "design-system";
import { Resource as ResourceDb, Review } from "../../../models";
import { ResourceProvider } from "../ResourceContext";
import { ReviewsProvider } from "../../Reviews/ReviewsContext";
import { Reviews } from "../../Reviews";
import { ResourceDisplay } from "./ResourceDisplay";
import { SkeletonResource } from "./SkeletonResource";

export * from "./ResourceThumbnail";

export interface ResourceProps {
  id: string;
}

export const Resource: FC<ResourceProps> = (props) => {
  const queryResource = useFirestoreDoc<ResourceDb>((db) =>
    db.doc(`resources/${props.id}`)
  );

  const queryReviews = useFirestoreCollection<Review>((db) =>
    db.collection(`resources/${props.id}/reviews`)
  );

  return (
    <VStack spacing={4} align="stretch">
      <QueriesGuard
        queries={[queryResource, queryReviews] as const}
        spinner={<SkeletonResource />}
      >
        {({ value: resource }, { value: reviews }) => (
          <>
            <ResourceProvider value={resource}>
              <ReviewsProvider value={{ reviews }}>
                <ResourceDisplay />
                <Reviews reviews={reviews} />
              </ReviewsProvider>
            </ResourceProvider>
          </>
        )}
      </QueriesGuard>
    </VStack>
  );
};
