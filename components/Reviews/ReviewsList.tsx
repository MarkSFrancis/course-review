import { Text, VStack } from "design-system";
import React, { FC } from "react";
import { Section } from "../Layout";
import { ReviewProvider } from "./ReviewContext";
import { ReviewDisplay } from "./ReviewDisplay";
import { useReviews } from "./ReviewsContext";

export const ReviewsList: FC = () => {
  const { reviews } = useReviews();

  if (reviews.length === 0) {
    return <Text fontSize="lg">No reviews have been published yet</Text>;
  }

  return (
    <VStack spacing={3} align="stretch">
      {reviews.map((r) => (
        <ReviewProvider key={r.id} value={r}>
          <Section>
            <ReviewDisplay />
          </Section>
        </ReviewProvider>
      ))}
    </VStack>
  );
};
