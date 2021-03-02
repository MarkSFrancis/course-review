import { FormControl, FormLabel } from "@chakra-ui/react";
import { FC } from "react";
import { FieldChildren } from "./Field";

export interface LabelledControlProps {
  label: string;
  isRequired?: boolean;
  formik: FieldChildren;
}

export const LabelledControl: FC<LabelledControlProps> = ({
  formik: { field, meta },
  label,
  isRequired,
  ...props
}) => {
  return (
    <FormControl isRequired={isRequired} isInvalid={meta.error && meta.touched}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      {props.children}
    </FormControl>
  );
};
