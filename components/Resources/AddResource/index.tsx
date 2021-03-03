import { VStack } from "@chakra-ui/react";
import { FC, useCallback } from "react";
import { FancyHeading } from "../../Typography";
import { AddForm, NewResource } from "./AddResourceForm";
import { Section } from "../../Layout";
import { now, useFirestoreAdd, useUser } from "../../../utils";
import { Resource } from "../../../models";
import { FormikHelpers } from "formik";

export const AddResource: FC = () => {
  const [publish, publishState] = useFirestoreAdd<Resource>();
  const user = useUser();

  const publishResource = useCallback(
    (evt: NewResource, helpers: FormikHelpers<NewResource>) => {
      publish("/resources", {
        createdBy: {
          uid: user.user.uid,
          displayName: user.user.displayName,
          email: user.user.email,
        },
        createdOn: now(),
        ...evt,
      }).finally(() => helpers.setSubmitting(false));
    },
    []
  );

  return (
    <Section>
      <VStack spacing={4} align="stretch">
        <FancyHeading>Add a resource</FancyHeading>
        <AddForm onSubmit={publishResource} state={publishState} />
      </VStack>
    </Section>
  );
};
