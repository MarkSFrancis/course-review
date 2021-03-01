import { createContext, FC, ProviderProps, useContext } from "react";
import { WithId } from '../../utils';
import { Course } from "../Review/ReviewContext";

export interface Courses {
  courses: WithId<Course>[];
}

const initialValue: Courses = {
  courses: [],
};

const coursesContext = createContext<Courses>(initialValue);

export const useCourses = () => useContext(coursesContext);

export const CoursesProvider: FC<ProviderProps<Courses>> = (props) => (
  <coursesContext.Provider {...props} />
);
