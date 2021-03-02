import { Heading } from "@chakra-ui/react";
import React, { FC } from "react";
import { useResource } from "../ResourceContext";

export const ResourceHeading: FC = () => {
  const { title } = useResource();

  return (
    <Heading color="#3182ce" size="lg">
      {title}
    </Heading>
  );
};
