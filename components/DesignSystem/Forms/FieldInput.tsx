import { forwardRef, Input } from "design-system";
import React from "react";
import { Field, FieldProps } from "./Field";

export const FieldInput = forwardRef<
  Omit<FieldProps, "children">,
  typeof Input
>(({ name, label, isRequired, ...inputProps }, ref) => {
  return (
    <Field name={name} label={label} isRequired={isRequired}>
      {({ field }) => (
        <Input id={field.name} ref={ref} {...field} {...inputProps} />
      )}
    </Field>
  );
});
