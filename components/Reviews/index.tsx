import { QueriesGuard } from "components/Query";
import { SkeletonResource } from "components/Resources/Resource/SkeletonResource";
import { ResourceProvider } from "components/Resources/ResourceContext";
import { Section, VStack } from "design-system";
import React, { FC } from "react";
import { Resource, Review } from "../../models";
import { QueryState, useFirestoreCollection, WithId } from "../../utils";
import { SecondaryHeading } from "../Typography";
import { AddReview } from "./AddReview";
import { ReviewsProvider } from "./ReviewsContext";
import { ReviewsList } from "./ReviewsList";

export interface ReviewProps {
  resourceQuery: QueryState<WithId<Resource>>;
  resourceId: string;
}

export const Reviews: FC<ReviewProps> = ({ resourceQuery, resourceId }) => {
  const reviewsQuery = useFirestoreCollection<Review>((db) =>
    db.collection(`resources/${resourceId}/reviews`)
  );

  return (
    <Section>
      <VStack spacing={3} align="stretch">
        <SecondaryHeading>Reviews</SecondaryHeading>
        <QueriesGuard
          queries={[resourceQuery, reviewsQuery] as const}
          spinner={<SkeletonResource />}
        >
          {({ value: resource }, { value: reviews }) => (
            <ResourceProvider value={resource}>
              <ReviewsProvider value={{ reviews }}>
                <ReviewsList />
                <AddReview />
              </ReviewsProvider>
            </ResourceProvider>
          )}
        </QueriesGuard>
      </VStack>
    </Section>
  );
};
