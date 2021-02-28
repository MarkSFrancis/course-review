import { Stack, forwardRef } from "@chakra-ui/react";

export * from "./CarouselItem";
export * from "./CarouselSeeMore";

export const Carousel = forwardRef<{}, typeof Stack>((props, ref) => {
  return (
    <Stack
      direction="row"
      spacing={6}
      borderRadius="md"
      borderWidth="1px"
      p={6}
      ref={ref}
      {...props}
    >
      {props.children}
    </Stack>
  );
});
