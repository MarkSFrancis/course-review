import { Box, Container, HStack, IconButton, Tooltip } from "@chakra-ui/react";
import React, { FC } from "react";
import { ThemeToggle } from "../ThemeToggle";
import { NavBarLogo } from "./NavBarLogo";
import { NavBarLink } from "./NavBarLink";
import { AddIcon } from "@chakra-ui/icons";
import { PageContainer } from "../Layout/PageContainer";

export const NavBar: FC = () => {
  return (
    <Box boxShadow="md">
      <PageContainer>
        <HStack justifyContent="space-between" spacing={4}>
          <HStack spacing={4}>
            <NavBarLogo />
            <NavBarLink href="/courses">Courses</NavBarLink>
            <NavBarLink href="/blogs">Blogs</NavBarLink>
            <NavBarLink href="/topics">Topics</NavBarLink>
          </HStack>
          <HStack spacing={4}>
            <NavBarLink href="/add">
              <Tooltip label="Add a resource">
                <IconButton aria-label="Add a resource" icon={<AddIcon />} />
              </Tooltip>
            </NavBarLink>
            <ThemeToggle />
          </HStack>
        </HStack>
      </PageContainer>
    </Box>
  );
};
