import { forwardRef, Stack, StackProps } from "design-system";

export const Toolbar = forwardRef<StackProps, typeof Stack>((props, ref) => {
  return <Stack direction={["column", "row"]} ref={ref} {...props} />;
});
