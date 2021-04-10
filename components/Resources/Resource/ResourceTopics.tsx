import { HStack } from "design-system";
import React from "react";
import { TopicDisplay } from "../../Topics/TopicDisplay";
import { TopicsProvider } from "../../Topics/TopicsContext";
import { useResource } from "../ResourceContext";

export const ResourceTopics = () => {
  const { topicIds } = useResource();

  if (!topicIds) {
    return <></>;
  }

  return (
    <TopicsProvider>
      <HStack>
        {Object.keys(topicIds).map((t) => (
          <TopicDisplay key={t} id={t} />
        ))}
      </HStack>
    </TopicsProvider>
  );
};
