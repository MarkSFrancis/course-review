import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import React, { FC, FormEvent, useCallback } from "react";
import { useSafeState } from '../../../utils/hooks/useSafeState';

export interface NewResource {}

export interface AddFormProps {
  onSubmit: (event: NewResource) => Promise<void> | void;
}

export const AddForm: FC<AddFormProps> = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useSafeState(false);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      (async () => {
        await onSubmit({});
        setIsSubmitting(false);
      })();
    },
    [onSubmit]
  );

  // TODO Add formik https://chakra-ui.com/docs/form/form-control#usage-with-form-libraries
  return (
    <form onSubmit={handleSubmit}>
      <VStack align="stretch" spacing={4}>
        <FormControl isRequired>
          <FormLabel>Url</FormLabel>
          <Input type="text" autoFocus />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Course title</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Resource type</FormLabel>
          <RadioGroup defaultValue="Course">
            <HStack spacing={4}>
              <Radio value="Course">Course</Radio>
              <Radio value="Blog">Blog</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        <HStack>
          <Button type="submit" colorScheme="blue" isLoading={isSubmitting}>
            Publish
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};
