import { Center, Spinner } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { useUser } from "../../utils";
import { NotSignedIn } from "./NotSignedIn";

export interface SignedInGuardProps {
  NotSignedIn?: ReactNode;
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
    return <>{props.NotSignedIn ?? <NotSignedIn />}</>;
  }

  return <>{props.children}</>;
};
