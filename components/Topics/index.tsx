import React, { FC } from 'react';
import { TopicsProvider } from "./TopicsContext";
import { TopicsList } from './TopicsList';

export * from "./TopicEditor";

export const Topics: FC = () => {
  return (
    <TopicsProvider>
      <TopicsList />
    </TopicsProvider>
  );
};
