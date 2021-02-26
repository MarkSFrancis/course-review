import { Box } from '@chakra-ui/react';
import { FC, useEffect } from "react";
import { useQuery } from 'react-query';
import { Course } from "../CoursesContext";

export interface CourseThumbnailProps {
  course: Course;
}

export const CourseThumbnail: FC<CourseThumbnailProps> = (props) => {
  // const query = useQuery([props.course], async () => {
  //   const response = await fetch(`${}` props.course.url);
  // });

  return <Box></Box>
};
