import { HStack, IconButton, Tooltip } from "@chakra-ui/react";
import React, { FC } from "react";
import { ThemeToggle } from "../ThemeToggle";
import { NavBarLogo } from "./NavBarLogo";
import { NavBarLink } from "./NavBarLink";
import { AddIcon } from "@chakra-ui/icons";
import { PageContainer } from "../Layout/PageContainer";
import { Section } from "../Layout";
import { SignedInGuard, SignInOutButton } from "../Auth";

export const NavBar: FC = () => {
  return (
    <Section boxShadow="md" p={0} borderRadius={0}>
      <PageContainer>
        <HStack justifyContent="space-between" spacing={4}>
          <HStack spacing={4}>
            <NavBarLogo />
          </HStack>
          <HStack spacing={4}>
            <SignedInGuard NotSignedIn={<SignInOutButton />}>
              <NavBarLink href="/add">
                <Tooltip label="Add a resource">
                  <IconButton aria-label="Add a resource" icon={<AddIcon />} />
                </Tooltip>
              </NavBarLink>
              <SignInOutButton />
            </SignedInGuard>
            <ThemeToggle />
          </HStack>
        </HStack>
      </PageContainer>
    </Section>
  );
};
