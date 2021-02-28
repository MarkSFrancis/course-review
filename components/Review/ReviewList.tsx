import { FancyHeading } from "../Typography";
import { useCourses } from "./ReviewContext";

export const CoursesList = () => {
  const courses = useCourses();

  return <FancyHeading>Courses</FancyHeading>;
};
