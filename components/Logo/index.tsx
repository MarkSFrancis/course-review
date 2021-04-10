import { forwardRef, Icon, IconProps } from "design-system";
import { IconBook } from "@tabler/icons";

export * from "./MicrosoftLogo";

export const Logo = forwardRef<IconProps, typeof Icon>((props, ref) => (
  <Icon w={6} h={6} ref={ref} as={IconBook} {...props} />
));
