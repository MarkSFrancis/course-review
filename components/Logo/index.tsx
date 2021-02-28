import { forwardRef, Icon, IconProps } from "@chakra-ui/react";
import { IconBook } from "@tabler/icons";

export const Logo = forwardRef<IconProps, typeof Icon>((props, ref) => (
  <Icon w={6} h={6} ref={ref} as={IconBook} {...props} />
));
