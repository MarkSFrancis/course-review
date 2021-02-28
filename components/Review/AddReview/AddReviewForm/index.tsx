import {
  Button,
  FormControl,
  FormLabel,
  NumberInput,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FC, FormEvent, useCallback } from "react";

export interface AddReviewFormProps {
  onSubmit: () => Promise<void> | void;
}

export const AddReviewForm: FC<AddReviewFormProps> = (props) => {
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    props.onSubmit();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Star rating</FormLabel>
          <NumberInput max={5} min={1} />
        </FormControl>
        <FormControl>
          <FormLabel>Details</FormLabel>
          <Textarea />
        </FormControl>
        <Button type="submit">Publish your review</Button>
      </VStack>
    </form>
  );
};
