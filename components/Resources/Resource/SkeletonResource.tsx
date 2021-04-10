import { SkeletonText } from "design-system";
import React, { FC } from "react";
import { Section } from "../../Layout";

export const SkeletonResource: FC = () => (
  <Section as="article">
    <SkeletonText noOfLines={3} spacing={4} />
  </Section>
);
