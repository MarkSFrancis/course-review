import { forwardRef, Input } from "design-system";
import React from "react";
import { LabelledControl, LabelledControlProps } from "./LabelledControl";

export const LabelledInput = forwardRef<LabelledControlProps, typeof Input>(
  ({ formik, label, isRequired, ...inputProps }, ref) => {
    return (
      <LabelledControl label={label} isRequired={isRequired}>
        <Input
          id={formik.field.name}
          ref={ref}
          {...formik.field}
          {...inputProps}
        />
      </LabelledControl>
    );
  }
);
