import { Button, HStack, Radio, RadioGroup, VStack } from "design-system";
import React, { FC, useCallback } from "react";
import { ResourceType } from "../../../../models";
import { Form, Formik, FormikErrors, FormikHelpers } from "formik";
import { Field, FieldInput } from "../../../Forms";
import { FetchState, FirestoreAddResult } from "../../../../utils";
import { ErrorDisplay, SuccessDisplay } from "../../../Alert";
import { TopicEditor } from "../../../Topics";

export interface NewResource {
  title: string;
  resourceType: ResourceType;
  url: string;
  topicIds: string[];
}

export interface AddResourceFormProps {
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
  topicIds: [],
};

export const AddResourceForm: FC<AddResourceFormProps> = ({
  onSubmit,
  state,
}) => {
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
              <SuccessDisplay description="Published resource">
                Your new resource has been published. Thank you for sharing!
              </SuccessDisplay>
            )}
            <FieldInput name="url" label="Url" isRequired autoFocus />
            <FieldInput name="title" label="Title" isRequired />
            <Field name="resourceType" label="Resource type">
              {(formik) => (
                <RadioGroup
                  defaultValue="Course"
                  {...formik.field}
                  onChange={formik.setValue}
                >
                  <HStack spacing={4}>
                    <Radio value="Course">Course</Radio>
                    <Radio value="Blog">Blog</Radio>
                  </HStack>
                </RadioGroup>
              )}
            </Field>
            <Field name="topicIds" label="Topics">
              {(formik) => (
                <TopicEditor
                  topicIds={formik.field.value || []}
                  topicIdsChanged={(t) => {
                    formik.setValue(t);
                  }}
                />
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
