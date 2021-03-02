import {
  Field as FormikField,
  FieldConfig,
  FieldInputProps,
  FieldMetaProps,
  FormikProps,
} from "formik";
import { forwardRef } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface FieldChildren<V = any, FormValues = any> {
  field: FieldInputProps<V>;
  form: FormikProps<FormValues>;
  meta: FieldMetaProps<V>;
}

export interface FieldProps<V = any, FormValues = any> extends FieldConfig {
  children: (props: FieldChildren<V, FormValues>) => ReactNode;
}

export const Field = forwardRef<FieldProps, typeof FormikField>(
  (props, ref) => <FormikField ref={ref} {...props} />
);
