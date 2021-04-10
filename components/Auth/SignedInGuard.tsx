import { Center, Spinner } from "design-system";
import React, { FC, ReactNode } from "react";
import { useUser } from "../../utils";
import { NotSignedIn } from "./NotSignedIn";

export interface SignedInGuardProps {
  notSignedIn?: ReactNode;
}

export const SignedInGuard: FC<SignedInGuardProps> = (props) => {
  const user = useUser();

  if (!user) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  if (!user.user) {
    return <>{props.notSignedIn ?? <NotSignedIn />}</>;
  }

  return <>{props.children}</>;
};
