import { HStack } from "design-system";
import React, { FC, useCallback } from "react";
import { Topic } from "../../../models";
import { WithId } from "../../../utils";
import { TopicDisplay } from "../TopicDisplay";
import { TopicsProvider } from "../TopicsContext";
import { AddTopic } from "./AddTopic";

export interface TopicEditorProps {
  topicIds: string[];
  topicIdsChanged: (newTopicIds: string[]) => void;
}

export const TopicEditor: FC<TopicEditorProps> = (props) => {
  const addTopic = useCallback(
    (topic: WithId<Topic>) => {
      props.topicIdsChanged([...props.topicIds, topic.id]);
    },
    [props.topicIds, props.topicIdsChanged]
  );

  const removeTopic = useCallback(
    (id: string) => {
      props.topicIdsChanged(props.topicIds.filter((t) => t !== id));
    },
    [props.topicIds, props.topicIdsChanged]
  );

  return (
    <TopicsProvider>
      <HStack>
        {props.topicIds.map((t) => (
          <TopicDisplay key={t} id={t} onDelete={() => removeTopic(t)} />
        ))}
        <AddTopic onAdd={addTopic} />
      </HStack>
    </TopicsProvider>
  );
};
