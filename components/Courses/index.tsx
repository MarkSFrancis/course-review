import { CoursesProvider } from "./CoursesContext";
import { CoursesList } from "./CoursesList";

export const Courses = () => {
  return (
    <CoursesProvider>
      <CoursesList />
    </CoursesProvider>
  );
};
