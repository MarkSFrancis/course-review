import React, { FC, useEffect, useState } from "react";
import { Autocomplete } from "design-system";
import { useTopics } from "../TopicsContext";

export interface TopicAutocomplete {
  value: string;
  setValue: (newValue: string) => void;
}

export const TopicAutocomplete: FC<TopicAutocomplete> = (props) => {
  const topics = useTopics();

  const [suggestions, setSuggestions] = useState(() =>
    topics.map((t) => t.name)
  );

  useEffect(() => {
    const value = props.value.toUpperCase();
    setSuggestions(
      topics.map((t) => t.name).filter((t) => t.toUpperCase().includes(value))
    );
  }, [topics, props.value]);

  return (
    <Autocomplete
      setValue={props.setValue}
      value={props.value}
      suggestions={suggestions}
    />
  );
};
