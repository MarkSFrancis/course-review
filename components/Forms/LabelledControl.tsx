import { FormControl, FormErrorMessage, FormLabel } from "design-system";
import React, { FC } from "react";
import { useField } from "./FormFieldContext";
import { FieldChildren, FormikChildren } from "./types";

export interface LabelledControlProps {
  label?: string;
  isRequired?: boolean;
  children: FormikChildren;
}

export const LabelledControl: FC<LabelledControlProps> = ({
  label,
  isRequired,
  ...props
}) => {
  const { field, meta, form } = useField();
  const errors = form.errors[field.name];

  errors ? console.log(errors) : {};

  return (
    <FormControl isRequired={isRequired} isInvalid={meta.error && meta.touched}>
      {label && <FormLabel htmlFor={field.name}>{label}</FormLabel>}
      <FieldChildren>{props.children}</FieldChildren>
      <FormErrorMessage>{errors}</FormErrorMessage>
    </FormControl>
  );
};
