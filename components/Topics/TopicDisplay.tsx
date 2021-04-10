import { Tag, TagCloseButton, TagLabel, TagProps } from "design-system";
import { FC, useEffect, useState } from "react";
import { getForegroundColor } from "../../utils";
import { useTopics } from "./TopicsContext";

export interface TopicDisplayProps {
  id: string;
  onDelete?: () => void;
}

export const TopicDisplay: FC<TopicDisplayProps & TagProps> = (props) => {
  const { id, onDelete, ...tagProps } = props;

  const topics = useTopics();

  const [topic, setTopic] = useState(() => topics.find((t) => t.id === id));

  useEffect(() => {
    setTopic(topics.find((t) => t.id === id));
  }, [topics, id]);

  if (!topic) {
    return <></>;
  }

  const textColor = topic && getForegroundColor(topic.color);

  return (
    <Tag
      background={topic.color}
      color={textColor?.rgb().toString()}
      {...tagProps}
    >
      <TagLabel>{topic.name}</TagLabel>
      {tagProps.children}
      {onDelete && <TagCloseButton onClick={() => onDelete()} />}
    </Tag>
  );
};
