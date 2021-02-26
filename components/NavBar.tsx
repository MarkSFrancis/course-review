import { Box, HStack, Link } from "@chakra-ui/react";
import React, { FC } from "react";
import NextLink from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { FancyText } from "./Typography";

export const NavBar: FC = () => {
  return (
    <Box boxShadow="md" px={6} py={4}>
      <HStack justifyContent="space-between">
        <NextLink href="/">
          <Link>
            <FancyText fontSize="xl" fontWeight="semibold">
              Course Review
            </FancyText>
          </Link>
        </NextLink>
        <ThemeToggle />
      </HStack>
    </Box>
  );
};
