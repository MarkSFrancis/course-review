import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useIsMounted } from "./useIsMounted";

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
