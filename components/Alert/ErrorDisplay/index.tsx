import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { isFirebaseError, FirebaseErrorDisplay } from "./FirebaseErrorDisplay";
import { GenericErrorDisplay } from "./GenericErrorDisplay";

export interface ErrorDisplayProps {
  err: unknown;
  description?: string;
}

const ErrorContent: FC<{ err: unknown }> = ({ err }) => {
  if (isFirebaseError(err)) {
    return <FirebaseErrorDisplay err={err} />;
  } else {
    return <GenericErrorDisplay err={err} />;
  }
};

export const ErrorDisplay: FC<ErrorDisplayProps> = ({ err, description }) => (
  <Alert variant="solid" status="error">
    <AlertIcon />
    <Box flex={1}>
      {description && <AlertTitle mr={2}>{description}</AlertTitle>}
      <AlertDescription display="block">
        <ErrorContent err={err} />
      </AlertDescription>
    </Box>
  </Alert>
);
