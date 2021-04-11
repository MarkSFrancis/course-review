import { Button } from "design-system";
import { IconPlus } from "@tabler/icons";
import { FC, useCallback, useEffect, useState } from "react";
import { Topic } from "../../../models";
import { now, random, useFirestoreAdd, useUser, WithId } from "../../../utils";
import { useTopics } from "../TopicsContext";
import { TopicAutocomplete } from "./TopicAutocomplete";

export interface AddTopicProps {
  onAdd: (topic: WithId<Topic>) => void;
}

export const AddTopic: FC<AddTopicProps> = (props) => {
  const topics = useTopics();
  const [value, setValue] = useState("");
  const [isNew, setIsNew] = useState(
    () => !topics.find((t) => t.name === value)
  );

  const [createTopic, createTopicStatus] = useFirestoreAdd<Topic>();
  const { user } = useUser();

  useEffect(() => {
    setIsNew(!topics.find((t) => t.name === value));
  }, [topics, value]);

  const handleAddCreate = useCallback(async () => {
    let topic = topics.find((t) => t.name === value);
    if (!topic) {
      let newTopic = {
        color: random.color(true).toString(),
        createdBy: {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        },
        createdOn: now(),
        name: value,
      };

      const { id: newTopicId } = await createTopic("/topics", newTopic);

      topic = {
        ...newTopic,
        id: newTopicId,
      };
    }

    props.onAdd(topic);
    setValue("");
  }, [value, props.onAdd, setValue, createTopic, topics, user]);

  return (
    <>
      <TopicAutocomplete value={value} setValue={setValue} />
      <Button
        leftIcon={<IconPlus />}
        isLoading={createTopicStatus.state === "loading"}
        isDisabled={!value}
        onClick={handleAddCreate}
      >
        {isNew ? "Create topic" : "Add topic"}
      </Button>
    </>
  );
};
