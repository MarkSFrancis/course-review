import { CoursesProvider } from "./CoursesContext";
import { CoursesList } from "./CoursesList";
import React from "react";
import { ResourceType } from "../../models";
import { useFirestoreQueryCollection } from "../../utils";
import { Section } from "../Layout";
import { QueryGuard } from "../Query";
import { Course } from "../Review/ReviewContext";
import { FancyHeading } from "../Typography";
import { VStack } from "@chakra-ui/react";

export const Courses = () => {
  const query = useFirestoreQueryCollection<Course>((db) =>
    db
      .collection("resources")
      .where("resourceType", "==", ResourceType.Course)
      .orderBy("createdOn")
      .limit(20)
  );

  return (
    <Section>
      <VStack spacing={4} align="stretch">
        <FancyHeading>Courses</FancyHeading>
        <QueryGuard query={query}>
          {({ value }) => (
            <CoursesProvider value={{ courses: value }}>
              <CoursesList />
            </CoursesProvider>
          )}
        </QueryGuard>
      </VStack>
    </Section>
  );
};
