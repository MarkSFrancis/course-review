import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Center } from "@chakra-ui/react";
import React, { FC } from "react";
import { CarouselItem } from "./CarouselItem";

export interface CarouselSeeMoreProps {
  onClick: () => void;
}

export const CarouselSeeMore: FC<CarouselSeeMoreProps> = (props) => {
  return (
    <CarouselItem>
      <Center>
        <Button rightIcon={<ArrowRightIcon />}>See more</Button>
      </Center>
    </CarouselItem>
  );
};
