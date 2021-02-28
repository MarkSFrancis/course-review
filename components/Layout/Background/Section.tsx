import { Box, forwardRef, useColorModeValue } from "@chakra-ui/react";

export const Section = forwardRef((props, ref) => {
  const bg = useColorModeValue("whiteAlpha.900", "blackAlpha.700");

  return (
    <Box
      borderRadius="md"
      borderWidth="1px"
      p={6}
      boxShadow="md"
      background={bg}
      ref={ref}
      {...props}
    >
      {props.children}
    </Box>
  );
});
