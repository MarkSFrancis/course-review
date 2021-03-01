import { FancyHeading } from "../Typography";
import { useReviews } from "./ReviewContext";

export const ReviewsList = () => {
  const reviews = useReviews();

  return <FancyHeading>Reviews</FancyHeading>;
};
