import { VStack, Section } from "design-system";
import { FC, useCallback } from "react";
import { FancyHeading } from "../../Typography";
import { AddResourceForm, NewResource } from "./AddResourceForm";
import { now, useFirestoreAdd, useUser } from "../../../utils";
import { Resource } from "../../../models";
import { FormikHelpers } from "formik";

export const AddResource: FC = () => {
  const [publish, publishState] = useFirestoreAdd<Resource>();
  const { user } = useUser();

  const publishResource = useCallback(
    (evt: NewResource, helpers: FormikHelpers<NewResource>) => {
      publish("/resources", {
        createdBy: {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        },
        createdOn: now(),
        ...evt,
        topicIds: evt.topicIds.reduce(
          (prev, t) => ({ ...prev, [t]: true }),
          {}
        ),
      }).finally(() => helpers.setSubmitting(false));
    },
    [user]
  );

  return (
    <Section>
      <VStack spacing={4} align="stretch">
        <FancyHeading>Add a resource</FancyHeading>
        <AddResourceForm onSubmit={publishResource} state={publishState} />
      </VStack>
    </Section>
  );
};
