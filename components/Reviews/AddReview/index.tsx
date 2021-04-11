import { Section, VStack } from "design-system";
import { FormikHelpers } from "formik";
import React, { FC, useCallback } from "react";
import { Review } from "../../../models";
import { now, useFirestoreAdd, useUser } from "../../../utils";
import { useResource } from "../../Resources/ResourceContext";
import { SecondaryHeading } from "../../Typography";
import { useReviews } from "../ReviewsContext";
import { AddReviewForm, NewReview } from "./AddReviewForm";

export const AddReview: FC = () => {
  const { id: resourceId } = useResource();
  const { reviews } = useReviews();
  const [addReview, state] = useFirestoreAdd<Review>();
  const user = useUser();

  const onSubmit = useCallback(
    (newReview: NewReview, helpers: FormikHelpers<NewReview>) => {
      addReview(`resources/${resourceId}/reviews`, {
        details: newReview.details,
        rating: newReview.stars,

        createdBy: {
          uid: user.user.uid,
          displayName: user.user.displayName,
          email: user.user.email,
        },
        createdOn: now(),
      }).finally(() => helpers.setSubmitting(false));
    },
    [addReview, resourceId, user]
  );

  if (
    !user?.user?.uid ||
    reviews?.find((r) => r.createdBy.uid === user.user.uid)
  ) {
    // Don't allow user to create multiple reviews
    return <></>;
  }

  return (
    <Section>
      <VStack spacing={3} align="stretch">
        <SecondaryHeading>Add your review</SecondaryHeading>
        <AddReviewForm onSubmit={onSubmit} state={state} />
      </VStack>
    </Section>
  );
};
