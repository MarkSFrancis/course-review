import { WithId } from "../../utils";
import { createContext, FC, ProviderProps, useContext } from "react";
import { Review } from "../../models";

export interface Reviews {
  reviews: WithId<Review>[];
}

const initialValue: Reviews = {
  reviews: [],
};

const reviewContext = createContext<Reviews>(initialValue);

export const useReviews = () => useContext(reviewContext);

export const ReviewsProvider: FC<ProviderProps<Reviews>> = (props) => (
  <reviewContext.Provider {...props} />
);
