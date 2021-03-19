import { forwardRef, Stack, StackProps } from "@chakra-ui/react";

export const Toolbar = forwardRef<StackProps, typeof Stack>((props, ref) => {
  return <Stack direction={["column", "row"]} ref={ref} {...props} />;
});
