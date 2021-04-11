import { Section, SkeletonText } from "design-system";
import React, { FC } from "react";

export const SkeletonResource: FC = () => (
  <Section as="article">
    <SkeletonText noOfLines={3} spacing={4} />
  </Section>
);
