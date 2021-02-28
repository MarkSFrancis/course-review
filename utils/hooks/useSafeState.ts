import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useIsMounted } from "./useIsMounted";

/**
 * Returns a stateful value, and a function to update it. If the component is unmounted, the state is not updated. 
 * 
 * Use this if you're using async callbacks, and you cannot cleanly cancel or unsubscribe from the async callback
 */
export const useSafeState = <S>(
  initialState?: S | (() => S)
): [S, Dispatch<SetStateAction<S>>] => {
  const [value, setValue] = useState(initialState);

  const isMounted = useIsMounted();

  const safeSetValue = useCallback(
    (newValue: S | ((prevState: S) => S)) => {
      if (isMounted()) {
        setValue(newValue);
      }
    },
    [setValue]
  );

  return [value, safeSetValue];
};
