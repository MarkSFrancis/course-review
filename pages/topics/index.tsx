import { PageMeta } from "../../components/PageMeta";
import { PageContainer } from "../../components/Layout/PageContainer";
import { FancyHeading } from "../../components/Typography";
import { Section } from "../../components/Layout";
import React from "react";
import { Link, VStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Topics() {
  return (
    <PageContainer>
      <PageMeta title="Topics" />
      <Section>
        <VStack align="stretch" spacing={4}>
          <FancyHeading>Topics</FancyHeading>
          <p>🚧 Topics are a work in progress.</p>
          <p>
            Check back later to see if they've been implemented, or vote for the
            feature{" "}
            <Link
              isExternal
              href="https://github.com/MarkSFrancis/course-review/issues/1"
            >
              here <ExternalLinkIcon mx="2px" />
            </Link>
          </p>
        </VStack>
      </Section>
    </PageContainer>
  );
}
