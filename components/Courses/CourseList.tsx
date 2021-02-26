import { Heading } from "@chakra-ui/react";
import { FancyText } from "../Typography";
import { useCourses } from "./CoursesContext";

export const CourseList = () => {
  const courses = useCourses();

  return (
    <Heading size="lg">
      <FancyText>Courses</FancyText>
    </Heading>
  );
};
