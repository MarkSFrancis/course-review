import {
  Alert,
  AlertIcon,
  AlertProps,
  forwardRef,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const NotSignedIn = forwardRef<AlertProps, typeof Alert>(
  (props, ref) => (
    <Alert
      status="error"
      variant="solid"
      justifyContent="center"
      alignItems="center"
      ref={ref}
      {...props}
    >
      <AlertIcon />
      {props.children || <Text>You must be signed in to access this</Text>}
    </Alert>
  )
);
