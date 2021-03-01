import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { isFirebaseError, FirebaseErrorDisplay } from "./FirebaseErrorDisplay";

export interface ErrorDisplayProps {
  description?: string;
}

const ErrorContent: FC = (props) => {
  if (isFirebaseError(props.children)) {
    return <FirebaseErrorDisplay>{props.children}</FirebaseErrorDisplay>;
  } else {
    return <>{props.children}</>;
  }
};

export const ErrorDisplay: FC<ErrorDisplayProps> = (props) => (
  <Alert variant="solid" status="error">
    <AlertIcon />
    <Box flex={1}>
      {props.description && <AlertTitle mr={2}>{props.description}</AlertTitle>}
      <AlertDescription display="block">
        <ErrorContent>{props.children}</ErrorContent>
      </AlertDescription>
    </Box>
  </Alert>
);
