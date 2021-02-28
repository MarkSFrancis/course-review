import { FancyHeading } from "../Typography";
import { useCourses } from "./CoursesContext";

export const CoursesList = () => {
  const courses = useCourses();

  return <FancyHeading>Courses</FancyHeading>;
};
