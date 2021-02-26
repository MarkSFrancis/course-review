import { createContext, FC, useContext } from "react";

export interface Courses {}

export interface Course {
  url: string;
}

const coursesContext = createContext<Courses>({});

export const useCourses = () => useContext(coursesContext);

export const CoursesProvider: FC = ({ children }) => (
  <coursesContext.Provider value={{}}>{children}</coursesContext.Provider>
);
