import { act, renderHook } from "@testing-library/react-hooks";
import { useIsMounted } from "./useIsMounted";

describe("useIsMounted", () => {
  it("returns true when component is mounted", () => {
    const { result } = renderHook(() => useIsMounted());

    expect(result.current()).toBe(true);
  });

  it("returns false when component is unmounted", () => {
    const { result, unmount } = renderHook(() => useIsMounted());

    unmount();

    expect(result.current()).toBe(false);
  });
});
