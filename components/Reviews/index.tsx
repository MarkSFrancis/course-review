import { VStack } from "design-system";
import React, { FC } from "react";
import { Review } from "../../models";
import { WithId } from "../../utils";
import { Section } from "../Layout";
import { SecondaryHeading } from "../Typography";
import { AddReview } from "./AddReview";
import { ReviewsProvider } from "./ReviewsContext";
import { ReviewsList } from "./ReviewsList";

export interface ReviewProps {
  reviews: WithId<Review>[];
}

export const Reviews: FC<ReviewProps> = ({ reviews }) => {
  return (
    <Section>
      <ReviewsProvider value={{ reviews }}>
        <VStack spacing={3} align="stretch">
          <SecondaryHeading>Reviews</SecondaryHeading>
          <ReviewsList />

          <AddReview />
        </VStack>
      </ReviewsProvider>
    </Section>
  );
};
