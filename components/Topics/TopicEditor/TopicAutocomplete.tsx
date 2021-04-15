import React, { FC } from "react";
import { Autocomplete } from "design-system";
import { useTopics } from "../TopicsContext";
import { TopicDisplay } from "../TopicDisplay";

export interface TopicAutocomplete {
  value: string;
  setValue: (newValue: string) => void;
}

export const TopicAutocomplete: FC<TopicAutocomplete> = (props) => {
  const topics = useTopics();

  return (
    <Autocomplete setValue={props.setValue} value={props.value}>
      {{
        suggestions: (
          <Autocomplete.Suggestions>
            {topics.map((t) => (
              <Autocomplete.Suggestion key={t.id} value={t.name}>
                <TopicDisplay id={t.id} />
              </Autocomplete.Suggestion>
            ))}
          </Autocomplete.Suggestions>
        ),
      }}
    </Autocomplete>
  );
};
