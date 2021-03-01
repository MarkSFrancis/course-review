import { Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { useCourses } from "./CoursesContext";

export const CoursesList: FC = () => {
  const { courses } = useCourses();

  if (courses.length === 0) {
    return <Text fontSize="lg">No courses have been published yet</Text>;
  }

  return (
    <>
      {courses.map((c) => (
        <Text key={c.id}>{c.title}</Text>
      ))}
    </>
  );
};
