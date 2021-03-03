import { Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { ReviewProvider } from "./ReviewContext";
import { ReviewDisplay } from "./ReviewDisplay";
import { useReviews } from "./ReviewsContext";

export const ReviewsList: FC = () => {
  const { reviews } = useReviews();

  if (reviews.length === 0) {
    return <Text fontSize="lg">No reviews have been published yet</Text>;
  }

  return (
    <>
      {reviews.map((r) => (
        <ReviewProvider key={r.id} value={r}>
          <ReviewDisplay />
        </ReviewProvider>
      ))}
    </>
  );
};
