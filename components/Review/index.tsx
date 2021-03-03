import React, { FC } from "react";
import { Review } from "../../models";
import { WithId } from "../../utils";
import { SecondaryHeading } from "../Typography";
import { ReviewsProvider } from "./ReviewsContext";
import { ReviewsList } from "./ReviewsList";

export interface ReviewProps {
  reviews: WithId<Review>[];
}

export const Reviews: FC<ReviewProps> = ({ reviews }) => {
  return (
    <>
      <SecondaryHeading>Reviews</SecondaryHeading>
      <ReviewsProvider value={{ reviews }}>
        <ReviewsList />
      </ReviewsProvider>
    </>
  );
};
