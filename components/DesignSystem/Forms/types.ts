import { FieldInputProps, FormikProps, FieldMetaProps } from "formik";
import { FC, ReactElement } from "react";
import { useField } from "./FormFieldContext";

export interface FormikFieldChildren<V = any, FormValues = any> {
  field: FieldInputProps<V>;
  form: FormikProps<FormValues>;
  meta: FieldMetaProps<V>;
  value: V;
  setValue: (newValue: V) => void;
}

export type FormikChildren<V = any, FormValues = any> =
  | ReactElement
  | FormikFunctionChildren<V, FormValues>;

type FormikFunctionChildren<V = any, FormValues = any> = (
  props: FormikFieldChildren<V, FormValues>
) => ReactElement;

export const FieldChildren: FC<{ children: FormikChildren }> = ({
  children,
}) => {
  const formik = useField();
  return isFormikChildren(children) ? children(formik) : children;
};

export function isFormikChildren<V = any, FormValues = any>(
  children: unknown
): children is FormikFunctionChildren<V, FormValues> {
  return typeof children === "function";
}
