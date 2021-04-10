import { Wrap, WrapItem } from "design-system";
import React, { FC } from "react";
import { TopicDisplay } from "../TopicDisplay";
import { useTopics } from "../TopicsContext";

export const TopicsList: FC = () => {
  const topics = useTopics();

  return (
    <>
      <Wrap spacing="30px">
        {topics.map((t) => (
          <WrapItem>
            <TopicDisplay key={t.id} id={t.id} size="lg" />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};
