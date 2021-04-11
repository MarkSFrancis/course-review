import { act } from "@testing-library/react";

/**
 * Suppresses the next act warning. Useful when async act isn't working as expected
 */
export const actWithoutWarn = async <T = void>(
  action: () => Promise<T> | T,
  opts?: { suppressActWarnings?: boolean }
): Promise<T> => {
  const { suppressActWarnings } = {
    suppressActWarnings: true,
    ...(opts ?? {}),
  };

  let spy: jest.SpyInstance;

  if (suppressActWarnings) {
    spy = jest.spyOn(console, "error").mockImplementation(() => {});
  }

  let result: T;
  let promise: Promise<T> | T;
  await act(async () => {
    promise = action();
    result = await promise;
  });

  // Await in act is not working as expected - this ensures that the act is called as expected before continuing
  await promise;

  if (suppressActWarnings) {
    spy.mockRestore();
  }

  return result;
};
