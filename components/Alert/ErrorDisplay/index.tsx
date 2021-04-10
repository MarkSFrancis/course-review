import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from "design-system";
import React, { FC } from "react";
import { isFirebaseError, FirebaseErrorDisplay } from "./FirebaseErrorDisplay";
import { GenericErrorDisplay } from "./GenericErrorDisplay";

export interface ErrorDisplayWithChildren {
  description?: string;
  children: React.ReactNode;
  err?: never;
}

export interface ErrorDisplayWithErr {
  err: unknown;
  description?: string;
}

export type ErrorDisplayProps = ErrorDisplayWithChildren | ErrorDisplayWithErr;

const ErrorContent: FC<{ err: unknown }> = ({ err }) => {
  if (isFirebaseError(err)) {
    return <FirebaseErrorDisplay err={err} />;
  } else {
    return <GenericErrorDisplay err={err} />;
  }
};

export const ErrorDisplay: FC<ErrorDisplayProps> = (props) => (
  <Alert variant="solid" status="error">
    <AlertIcon />
    <Box flex={1}>
      {props.description && <AlertTitle mr={2}>{props.description}</AlertTitle>}
      <AlertDescription display="block">
        {props.children}
        {!!props.err && <ErrorContent err={props.err} />}
      </AlertDescription>
    </Box>
  </Alert>
);
