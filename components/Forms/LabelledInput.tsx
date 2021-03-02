import { FormErrorMessage, forwardRef, Input } from "@chakra-ui/react";
import React from "react";
import { LabelledControl, LabelledControlProps } from "./LabelledControl";

export const LabelledInput = forwardRef<LabelledControlProps, typeof Input>(
  ({ formik, label, isRequired, ...inputProps }, ref) => {
    const errors = formik.form.errors[formik.field.name];

    return (
      <LabelledControl formik={formik} label={label} isRequired={isRequired}>
        <Input
          id={formik.field.name}
          ref={ref}
          {...formik.field}
          {...inputProps}
        />
        <FormErrorMessage>{errors}</FormErrorMessage>
      </LabelledControl>
    );
  }
);
