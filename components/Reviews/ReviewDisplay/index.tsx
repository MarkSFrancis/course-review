import { Box, Text, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { AuditCreated } from "../../Audit";
import { RichInputPreview } from "../../Forms/RichInput";
import { Rating } from "../Rating";
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
        <Rating rating={review.rating} />
        <RichInputPreview value={review.details} />
      </VStack>
    </Box>
  );
};
