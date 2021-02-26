import { CoursesProvider } from "./CoursesContext";
import { CourseList } from "./CourseList";

export const Courses = () => {
  return (
    <CoursesProvider>
      <CourseList />
    </CoursesProvider>
  );
};
