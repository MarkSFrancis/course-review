import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/tag";
import { FC, useEffect, useState } from "react";
import { useTopics } from "./TopicsContext";

export interface TopicDisplayProps {
  id: string;
  onDelete?: () => void;
}

export const TopicDisplay: FC<TopicDisplayProps> = (props) => {
  const topics = useTopics();

  const [topic, setTopic] = useState(() =>
    topics.find((t) => t.id === props.id)
  );

  useEffect(() => {
    setTopic(topics.find((t) => t.id === props.id));
  }, [topics, props.id]);

  if (!topic) {
    return <></>;
  }

  return (
    <Tag background={topic.color}>
      <TagLabel>{topic.name}</TagLabel>
      {props.onDelete && <TagCloseButton onClick={() => props.onDelete()} />}
    </Tag>
  );
};
