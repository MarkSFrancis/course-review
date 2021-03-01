import { Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { Course } from "../../../models";
import { AuditCreated } from "../../Audit";
import { FancyHeading } from "../../Typography";

export interface CourseThumbnailProps {
  course: Course;
}

export const CourseThumbnail: FC<CourseThumbnailProps> = (props) => {
  return (
    <Box borderRadius="lg" borderWidth="1px" p="6">
      <FancyHeading>{props.course.title}</FancyHeading>
      <Text isTruncated>
        <AuditCreated value={props.course}>
          {(addedBy, addedOn) => (
            <>
              Added by {addedBy}, on {addedOn}
            </>
          )}
        </AuditCreated>
      </Text>
      <Text isTruncated>{props.course.description}</Text>
    </Box>
  );
};
