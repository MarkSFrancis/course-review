import { firestore } from "../../utils";
import { createContext, FC, useContext } from "react";

export interface Reviews {}

export interface Review {
  url: string;
  title: string;  
  addedBy: string;
  addedOn: firestore.Timestamp;
}

const reviewContext = createContext<Reviews>({});

export const useReviews = () => useContext(reviewContext);

export const ReviewsProvider: FC = ({ children }) => (
  <reviewContext.Provider value={{}}>{children}</reviewContext.Provider>
);
