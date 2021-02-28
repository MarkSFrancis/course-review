import { firestore } from "../../utils";
import { createContext, FC, useContext } from "react";

export interface Blogs {}

export interface Blog {
  url: string;
  title: string;
  description: string;
  addedBy: string;
  addedOn: firestore.Timestamp;
}

const blogsContext = createContext<Blogs>({});

export const useBlogs = () => useContext(blogsContext);

export const BlogsProvider: FC = ({ children }) => (
  <blogsContext.Provider value={{}}>{children}</blogsContext.Provider>
);
