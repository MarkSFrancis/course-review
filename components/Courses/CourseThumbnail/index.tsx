import { Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { FancyHeading } from "../../Typography";
import { RelativeTime } from "../../Units";
import { Course } from "../CoursesContext";

export interface CourseThumbnailProps {
  course: Course;
}

export const CourseThumbnail: FC<CourseThumbnailProps> = (props) => {
  return (
    <Box borderRadius="lg" borderWidth="1px" p="6">
      <FancyHeading>{props.course.title}</FancyHeading>
      <Text isTruncated>
        Added by {props.course.addedBy},{" "}
        <RelativeTime>{props.course.addedOn}</RelativeTime>
      </Text>
      <Text isTruncated>{props.course.description}</Text>
    </Box>
  );
};
