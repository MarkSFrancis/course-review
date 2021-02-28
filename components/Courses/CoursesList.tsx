import { FancyHeading } from "../Typography";
import { useCourses } from "./CoursesContext";

export const CoursesList = () => {
  const courses = useCourses();

  return <FancyHeading size="lg">Courses</FancyHeading>;
};
