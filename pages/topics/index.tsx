import { PageMeta } from "../../components/PageMeta";
import { PageContainer } from "../../components/Layout/PageContainer";
import { FancyHeading } from "../../components/Typography";
import { Section } from "../../components/Layout";
import React from "react";
import { VStack } from "@chakra-ui/react";
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
