import {
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import React, { FC } from "react";

export interface SuccessDisplayProps {
  title?: string;
}

export const SuccessDisplay: FC<SuccessDisplayProps> = (props) => (
  <Alert variant="solid" status="success">
    <AlertIcon />
    <Box flex={1}>
      {props.title && <AlertTitle mr={2}>{props.title}</AlertTitle>}
      <AlertDescription display="block">
        {props.children}
      </AlertDescription>
    </Box>
  </Alert>
);
