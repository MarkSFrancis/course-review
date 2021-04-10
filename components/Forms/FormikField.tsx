import {
  Field,
  FieldConfig,
  FieldInputProps,
  FieldMetaProps,
  FormikProps,
} from "formik";
import { forwardRef } from "design-system";
import { FormikChildren, FormikFieldChildren, FieldChildren } from "./types";
import { FieldProvider } from "./FormFieldContext";

export interface FormikFieldProps<V = any, FormValues = any>
  extends FieldConfig {
  children: FormikChildren<V, FormValues>;
}

interface FormikRawParams {
  field: FieldInputProps<any>;
  form: FormikProps<any>;
  meta: FieldMetaProps<any>;
}

export const FormikField = forwardRef<FormikFieldProps, typeof Field>(
  (props, ref) => (
    <Field ref={ref} {...props}>
      {(formik: FormikRawParams) => (
        <FieldProvider
          value={{
            ...formik,
            setValue: (v) => formik.form.setFieldValue(props.name, v),
            value: formik.field.value,
          }}
        >
          <FieldChildren>{props.children}</FieldChildren>
        </FieldProvider>
      )}
    </Field>
  )
);
