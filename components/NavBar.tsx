import { Box, HStack, Link, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import NextLink from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { FancyText } from "./Typography";

export const NavBar: FC = () => {
  return (
    <Box boxShadow="md" px={6} py={4}>
      <HStack justifyContent="space-between">
        <HStack spacing={4}>
          <NextLink href="/">
            <Link>
              <FancyText fontSize="xl" fontWeight="semibold">
                Course Review
              </FancyText>
            </Link>
          </NextLink>
          <NextLink href="/add">
            <Link>
              <Text fontSize="lg">
                Add a resource
              </Text>
            </Link>
          </NextLink>
        </HStack>
        <ThemeToggle />
      </HStack>
    </Box>
  );
};
