import { Heading, HeadingProps } from "@chakra-ui/react";
import { FC } from "react";
import { theme } from "../../utils";

export const SecondaryHeading: FC<HeadingProps> = (props) => (
  <Heading size="lg" color={theme.colors.secondaryHeading} {...props} />
);
