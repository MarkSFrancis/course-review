import {
  Button,
  HStack,
  Radio,
  RadioGroup,
  useCallbackRef,
  VStack,
} from "@chakra-ui/react";
import React, { FC, useCallback } from "react";
import { ResourceType } from "../../../models";
import { Form, Formik, FormikErrors, FormikHelpers } from "formik";
import { Field, LabelledControl, LabelledInput } from "../../Forms";
import { FetchState, FirestoreAddResult } from "../../../utils";
import { ErrorDisplay, SuccessDisplay } from "../../Alert";

export interface NewResource {
  title: string;
  resourceType: ResourceType;
  url: string;
}

export interface AddFormProps {
  onSubmit: (
    value: NewResource,
    helpers: FormikHelpers<NewResource>
  ) => Promise<void> | void;

  state: FetchState<FirestoreAddResult>;
}

const initialValue: NewResource = {
  resourceType: ResourceType.Course,
  title: "",
  url: "",
};

export const AddForm: FC<AddFormProps> = ({ onSubmit, state }) => {
  const validate = useCallback(
    (value: NewResource): FormikErrors<NewResource> => {
      let errors: FormikErrors<NewResource> = {};
      if (!value.title) {
        errors.title = "Title is required";
      }
      if (!value.url) {
        errors.url = "Url is required";
      }
      if (!value.resourceType) {
        errors.url = "Resource type is required";
      }

      return errors;
    },
    []
  );

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ isSubmitting }) => (
        <Form>
          <VStack align="stretch" spacing={4}>
            {state.state === "error" && <ErrorDisplay err={state.error} />}
            {state.state === "success" && (
              <SuccessDisplay title="Published resource">
                Your new resource has been published. Thank you for sharing!
              </SuccessDisplay>
            )}
            <Field name="url">
              {(formik) => (
                <LabelledInput
                  formik={formik}
                  label="Url"
                  isRequired
                  autoFocus
                />
              )}
            </Field>
            <Field name="title">
              {(formik) => (
                <LabelledInput label="Title" formik={formik} isRequired />
              )}
            </Field>
            <Field name="resourceType">
              {(formik) => (
                <LabelledControl label="Resource type" formik={formik}>
                  <RadioGroup defaultValue="Course" id={formik.field.name}>
                    <HStack spacing={4}>
                      <Radio value="Course">Course</Radio>
                      <Radio value="Blog">Blog</Radio>
                    </HStack>
                  </RadioGroup>
                </LabelledControl>
              )}
            </Field>
            <HStack>
              <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
                Publish
              </Button>
            </HStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
