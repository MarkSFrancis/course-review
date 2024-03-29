import {
  Button,
  Field,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  RichInput,
  VStack,
} from "design-system";
import React, { FC, useCallback } from "react";
import { Form, Formik, FormikErrors, FormikHelpers } from "formik";
import { FetchState, FirestoreAddResult } from "../../../../utils";
import { ErrorDisplay, SuccessDisplay } from "../../../Alert";
import { RichInputElement } from "design-system";

export interface AddReviewFormProps {
  onSubmit: (
    newReview: NewReview,
    helpers: FormikHelpers<NewReview>
  ) => Promise<void> | void;
  state: FetchState<FirestoreAddResult>;
}

export interface NewReview {
  stars: number;
  details: RichInputElement[];
}

const initialValue: NewReview = {
  stars: 3,
  details: [{ type: "", children: [{ text: "" }] }],
};

export const AddReviewForm: FC<AddReviewFormProps> = (props) => {
  const validate = useCallback((value: NewReview): FormikErrors<NewReview> => {
    let errors: FormikErrors<NewReview> = {};
    if (!value.stars) {
      errors.stars = "Star rating is required";
    }
    if (!value.details) {
      errors.details = "Details is required";
    }

    return errors;
  }, []);

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={props.onSubmit}
      validate={validate}
    >
      {({ isSubmitting }) => (
        <Form>
          <VStack spacing={4} align="stretch">
            {props.state.state === "error" && (
              <ErrorDisplay err={props.state.error} />
            )}
            {props.state.state === "success" && (
              <SuccessDisplay description="Published resource">
                Your new review has been published. Thank you for sharing!
              </SuccessDisplay>
            )}
            <Field name="stars" label="Star rating">
              {({ field, value, setValue }) => (
                <NumberInput
                  max={5}
                  min={1}
                  value={value}
                  onChange={(v) => setValue(parseInt(v) || 1)}
                >
                  <NumberInputField {...field} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              )}
            </Field>
            <Field name="details" label="Details">
              {({ value, setValue }) => (
                <RichInput value={value} onChange={setValue} />
              )}
            </Field>
            <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
              Publish your review
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
