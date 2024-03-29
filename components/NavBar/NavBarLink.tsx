import { Link, Text } from "design-system";
import { FC } from "react";
import NextLink from "next/link";

export const NavBarLink: FC<{ href: string }> = (props) => (
  <NextLink href={props.href}>
    <Link>
      <Text fontSize="lg">{props.children}</Text>
    </Link>
  </NextLink>
);
