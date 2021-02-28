import { useEffect } from "react";
import { useFetch } from "./useFetch";

export const useImmediateFetch = <
  TParams extends unknown[] = [],
  TResult = void,
  TResponse = Response
>(
  func: (...params: TParams) => Promise<TResponse>,
  responseHandler: (response: TResponse) => Promise<TResult> | TResult,
  ...initialParams: TParams
) => {
  const [trigger, state] = useFetch(func, responseHandler);

  useEffect(() => trigger(...initialParams), []);

  return [trigger, state] as const;
};
