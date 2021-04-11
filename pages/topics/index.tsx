import { PageMeta } from "../../components/PageMeta";
import { FancyHeading } from "../../components/Typography";
import React from "react";
import { Section, PageContainer, VStack } from "design-system";
import { Topics } from "../../components/Topics";

export default function TopicsPage() {
  return (
    <PageContainer>
      <PageMeta title="Topics" />
      <Section>
        <VStack align="stretch" spacing={4}>
          <FancyHeading>Topics</FancyHeading>
          <Topics />
        </VStack>
      </Section>
    </PageContainer>
  );
}
