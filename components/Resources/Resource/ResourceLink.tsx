import { Link, Button, Stack, Box } from "design-system";
import React, { FC } from "react";
import { useResource } from "../ResourceContext";
import NextLink from "next/link";
import { ExternalLinkIcon } from "design-system";

export const ResourceLink: FC<{ linkToDetails?: boolean }> = ({
  linkToDetails,
}) => {
  const { url, id } = useResource();
  let domainName = "their site";

  try {
    domainName = url && new URL(url).host;
  } catch {}

  return (
    <Stack direction={["column", "row"]}>
      <Box>
        <Link _hover={{ textDecoration: "none" }} href={url} isExternal>
          <Button rightIcon={<ExternalLinkIcon />} colorScheme="blue">
            Visit {domainName}
          </Button>
        </Link>
      </Box>
      {linkToDetails && (
        <Box>
          <NextLink href={`/resources/${id}`}>
            <Link _hover={{ textDecoration: "none" }}>
              <Button>Find out more...</Button>
            </Link>
          </NextLink>
        </Box>
      )}
    </Stack>
  );
};
