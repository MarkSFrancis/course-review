import React, { FC } from "react";
import {
  useFirestoreQueryCollection,
  useFirestoreQueryDoc,
} from "../../../utils";
import { Section } from "../../Layout";
import { QueriesGuard } from "../../Query";
import { Divider, VStack } from "@chakra-ui/react";
import { Resource as ResourceDb, Review } from "../../../models";
import { ResourceProvider } from "../ResourceContext";
import { ReviewsProvider } from "../../Review/ReviewsContext";
import { Reviews } from "../../Review";
import { ResourceDisplay } from "./ResourceDisplay";

export * from "./ResourceThumbnail";

export interface ResourceProps {
  id: string;
}

export const Resource: FC<ResourceProps> = (props) => {
  const queryResource = useFirestoreQueryDoc<ResourceDb>((db) =>
    db.doc(`resources/${props.id}`)
  );

  const queryReviews = useFirestoreQueryCollection<Review>((db) =>
    db.collection(`resources/${props.id}/reviews`)
  );

  return (
    <Section>
      <VStack spacing={4} align="stretch">
        <QueriesGuard queries={[queryResource, queryReviews] as const}>
          {({ value: resource }, { value: reviews }) => (
            <>
              <ResourceProvider value={resource}>
                <ResourceDisplay />
              </ResourceProvider>
              <Divider />
              <ReviewsProvider value={{ reviews }}>
                <Reviews reviews={reviews} />
              </ReviewsProvider>
            </>
          )}
        </QueriesGuard>
      </VStack>
    </Section>
  );
};
