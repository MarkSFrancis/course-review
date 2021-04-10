import { Stack } from "design-system";
import React, { FC } from "react";
import { FancyHeading, SecondaryHeading } from "../../Typography";
import { useResource } from "../ResourceContext";
import { ResourceTopics } from "./ResourceTopics";

export interface ResourceTitleProps {
  fancy?: boolean;
}

export const ResourceTitle: FC<ResourceTitleProps> = (props) => {
  const { title } = useResource();

  return (
    <Stack direction={["column", "row"]} justifyContent="space-between">
      {props.fancy ? (
        <FancyHeading>{title}</FancyHeading>
      ) : (
        <SecondaryHeading>{title}</SecondaryHeading>
      )}
      <ResourceTopics />
    </Stack>
  );
};
