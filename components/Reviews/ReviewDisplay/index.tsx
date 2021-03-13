import { Box, Text, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { AuditCreated } from "../../Audit";
import { useReview } from "../ReviewContext";

export const ReviewDisplay: FC = () => {
  const review = useReview();

  return (
    <Box>
      <VStack align="stretch" spacing={4}>
        <Text>
          <AuditCreated value={review}>
            {(name, time) => (
              <>
                Added by {name}, on {time}
              </>
            )}
          </AuditCreated>
        </Text>
        <Text>{review.rating}</Text>
        <Text>{review.details}</Text>
      </VStack>
    </Box>
  );
};
