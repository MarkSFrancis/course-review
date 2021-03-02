import { HStack, Link, Button } from "@chakra-ui/react";
import React, { FC } from "react";
import { useResource } from "../ResourceContext";

export const ResourceLink: FC = () => {
  const { url } = useResource();
  const domainName = url && new URL(url).host;

  return (
    <HStack>
      <Link href={url} isExternal>
        <Button colorScheme="blue">Visit {domainName}</Button>
      </Link>
    </HStack>
  );
};
