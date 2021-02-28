import { Container } from "@chakra-ui/react";
import React from "react";
import { PageMeta } from "../components/AppPage";
import { Blogs } from "../components/Blogs";
import {
  Carousel,
  CarouselItem,
  CarouselSeeMore,
} from "../components/Carousel";
import { Courses } from "../components/Courses";

export default function Home() {
  return (
    <Container py={4} maxW="container.xl">
      <PageMeta />
      <Courses />
      <Blogs />
      <Carousel>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselSeeMore onClick={() => {}} />
      </Carousel>
    </Container>
  );
}
