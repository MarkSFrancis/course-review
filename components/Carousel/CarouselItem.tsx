import { Box, BoxProps, forwardRef } from "@chakra-ui/react";

export const CarouselItem = forwardRef<BoxProps, typeof Box>((props, ref) => {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      verticalAlign="center"
      ref={ref}
      {...props}
    />
  );
});
