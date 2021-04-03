import { act, renderHook } from "@testing-library/react-hooks";
import { useFetch } from "./useFetch";

describe("useFetch", () => {
  it("sets the initial state to suspended", () => {
    const {
      result: {
        current: [, state],
      },
    } = renderHook(() =>
      useFetch(
        () => void 0,
        () => void 0
      )
    );

    expect(state.state).toEqual("suspended");
  });

  it("sets the state to loading when requested", async () => {
    let shouldResolve = false;

    const { result } = renderHook(() =>
      useFetch(
        () => {
          return new Promise((resolve) => {
            setInterval(() => {
              if (shouldResolve) {
                resolve(void 0);
              }
            }, 10);
          });
        },
        () => void 0
      )
    );

    let promise: Promise<void>;
    act(() => {
      promise = result.current[0]();
    });

    try {
      expect(result.current[1].state).toEqual("loading");
    } finally {
      await act(async () => {
        shouldResolve = true;
        await promise;
      });
    }
  });

  it("sets the state to success when loaded", async () => {
    const { result } = renderHook(() =>
      useFetch(
        () => void 0,
        () => void 0
      )
    );

    await act(result.current[0]);

    expect(result.current[1].state).toEqual("success");
  });

  it("sets the state to error when failed", async () => {
    const { result } = renderHook(() =>
      useFetch(
        () => {
          throw new Error();
        },
        () => void 0
      )
    );

    await act(result.current[0]);

    expect(result.current[1].state).toEqual("error");
  });

  it("returns the result of the promise when loaded", async () => {
    let expected = 5;

    const { result } = renderHook(() =>
      useFetch(
        () => expected - 1, // Change expected to test that formatter is also called
        (r) => r + 1 // Restore to expected value
      )
    );

    await act(result.current[0]);

    const actual = result.current[1];
    const actualResolved = actual.state === "success" && actual.value;

    expect(actualResolved).toEqual(expected);
  });
});
