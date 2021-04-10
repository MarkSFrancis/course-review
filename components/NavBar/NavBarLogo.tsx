import { Button, Link } from "design-system";
import React, { FC } from "react";
import NextLink from "next/link";
import { FancyText } from "../Typography";
import { Logo } from "../Logo";

export const NavBarLogo: FC = () => (
  <NextLink href="/">
    <Button>
      <Logo />
    </Button>
  </NextLink>
);
