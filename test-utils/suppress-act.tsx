/**
 * Suppresses the next act warning. Useful when async act isn't working as expected
 */
export const suppressNextActWarning = () => {
  let spy = jest.spyOn(console, "error").mockImplementationOnce(() => {
    spy.mockRestore();
  });
};
