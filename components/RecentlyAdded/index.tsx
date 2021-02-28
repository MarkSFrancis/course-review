import { VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { Section } from "../Layout";
import { Carousel, CarouselItem, CarouselSeeMore } from "../Carousel";
import { FancyHeading } from "../Typography";

export const RecentlyAdded: FC = () => (
  <Section>
    <VStack spacing={4} align="stretch">
      <FancyHeading>Recently added</FancyHeading>
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselSeeMore onClick={() => {}} />
      </Carousel>
    </VStack>
  </Section>
);
