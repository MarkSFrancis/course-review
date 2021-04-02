import { useIsMounted } from "./useIsMounted";
import { mocked } from "ts-jest/utils";
import { useSafeState } from "./useSafeState";
import { act, renderHook } from "@testing-library/react-hooks";

jest.mock("./useIsMounted");
const useIsMountedMock = mocked(useIsMounted);

/**
 * Returns a stateful value, and a function to update it. If the component is unmounted, the state is not updated.
 *
 * Use this if you're using async callbacks, and you cannot cleanly cancel or unsubscribe from the async callback
 */
describe("useSafeState", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    useIsMountedMock.mockReturnValue(() => true);
  });

  it("sets initial value", () => {
    const value = { test: "test value" };
    const { result } = renderHook(() => useSafeState(value));

    expect(result.current[0]).toBe(value);
  });

  it("updates value if mounted", () => {
    const value = { test: "test value" };
    const { result } = renderHook(() => useSafeState<typeof value>());

    act(() => {
      result.current[1](value);
    });

    expect(result.current[0]).toBe(value);
  });

  it("doe not update value if unmounted", () => {
    let isMounted = true;
    useIsMountedMock.mockReturnValue(() => isMounted);

    const value = { test: "test value" };
    const { result } = renderHook(() => useSafeState<typeof value>());

    isMounted = false;
    act(() => {
      result.current[1](value);
    });

    expect(result.current[0]).not.toBe(value);
  });
});
