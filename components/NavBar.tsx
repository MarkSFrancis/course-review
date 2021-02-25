import { Box, HStack, Link, Text, useTheme } from "@chakra-ui/react";
import React, { FC } from "react";
import NextLink from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export const NavBar: FC = () => {
  return (
    <Box boxShadow="md" px={6} py={4}>
      <HStack justifyContent="space-between">
        <NextLink href="/">
          <Link bgClip="text" bgGradient="linear(to-l, #7928CA,#FF0080)">
            <Text fontSize="xl" fontWeight="semibold">
              Course Review
            </Text>
          </Link>
        </NextLink>
        <ThemeToggle />
      </HStack>
    </Box>
  );
};
