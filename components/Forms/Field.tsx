import { FieldConfig } from "formik";
import React, { FC } from "react";
import { FormikField } from "./FormikField";
import { LabelledControl } from "./LabelledControl";
import { FieldChildren, FormikChildren } from "./types";

export interface FieldProps<V = any, FormValues = any>
  extends Omit<FieldConfig, "as"> {
  children: FormikChildren<V, FormValues>;
  label?: string;
  isRequired?: boolean;
}

export const Field: FC<FieldProps> = (props) => {
  const { children, label, isRequired, ...fieldProps } = props;

  return (
    <FormikField {...fieldProps}>
      <LabelledControl label={label} isRequired={isRequired}>
        <FieldChildren>{children}</FieldChildren>
      </LabelledControl>
    </FormikField>
  );
};
