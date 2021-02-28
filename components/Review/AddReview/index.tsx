import { Textarea } from "@chakra-ui/react";
import React, { FC } from "react";
import { Section } from "../../Layout";
import { FancyHeading } from "../../Typography";
import { AddReviewForm } from "./AddReviewForm";

export interface AddReviewProps {
  onSubmit: () => void;
}

export const AddReview: FC = () => (
  <Section>
    <FancyHeading>Add your review</FancyHeading>
    <AddReviewForm onSubmit={() => {}} />
  </Section>
);
