import { createContext, FC, ProviderProps, useContext } from "react";
import { Review } from "../../models";
import { WithId } from "../../utils";

const reviewContext = createContext<WithId<Review>>(undefined);

export const useReview = () => useContext(reviewContext);

export const ReviewProvider: FC<ProviderProps<WithId<Review>>> = (props) => (
  <reviewContext.Provider {...props} />
);
