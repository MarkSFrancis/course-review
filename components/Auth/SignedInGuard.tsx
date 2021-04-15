import { Center, Spinner } from "design-system";
import React, { FC, ReactNode } from "react";
import { useUser } from "../../utils";
import { NotSignedIn } from "./NotSignedIn";

export interface SignedInGuardProps {
  notSignedIn?: ReactNode;
}

export const SignedInGuard: FC<SignedInGuardProps> = (props) => {
  const { user, isLoadingUser } = useUser();

  if (isLoadingUser) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  if (!user) {
    return <>{props.notSignedIn ?? <NotSignedIn />}</>;
  }

  return <>{props.children}</>;
};
