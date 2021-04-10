import {
  forwardRef,
  Spinner as ChakraSpinner,
  SpinnerProps,
} from "@chakra-ui/react";

export const Spinner = forwardRef<SpinnerProps, "div">((props, ref) => (
  <ChakraSpinner role="status" ref={ref} {...props} />
));
