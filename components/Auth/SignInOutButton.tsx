import { Button, ButtonProps, forwardRef } from "@chakra-ui/react";
import React, { useCallback, MouseEvent } from "react";
import { auth, microsoftAuthProvider, useUser } from "../../utils";
import { useSafeState } from "../../utils/hooks/useSafeState";
import { MicrosoftLogo } from "../Logo";

export const SignInOutButton = forwardRef<ButtonProps, typeof Button>(
  (props, ref) => {
    const [isChangingState, setIsChangingState] = useSafeState(false);
    const user = useUser();

    const signIn = useCallback((e: MouseEvent) => {
      e.preventDefault();
      setIsChangingState(true);
      auth
        .signInWithPopup(microsoftAuthProvider)
        .finally(() => setIsChangingState(false));
    }, []);

    const signOut = useCallback((e: MouseEvent) => {
      e.preventDefault();
      setIsChangingState(true);
      auth.signOut().finally(() => setIsChangingState(false));
    }, []);

    if (!user) {
      return <></>;
    }

    if (!user.user || isChangingState) {
      return (
        <Button
          colorScheme="gray"
          onClick={signIn}
          isLoading={isChangingState}
          ref={ref}
          {...props}
        >
          <MicrosoftLogo mr={2} /> Sign in
        </Button>
      );
    } else {
      return (
        <Button colorScheme="gray" onClick={signOut} ref={ref} {...props}>
          Sign out
        </Button>
      );
    }
  }
);
