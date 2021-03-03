import { HeadingProps } from "@chakra-ui/react";
import React, { FC } from "react";
import { useResource } from "../ResourceContext";

export const ResourceTitle: FC<HeadingProps> = () => {
  const { title } = useResource();

  return <>{title}</>;
};
