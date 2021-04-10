import {
  renderHook,
  act,
  waitFor as reactWaitFor,
  suppressNextActWarning,
} from "test-utils";
import { useFetch } from "./useFetch";

const waitFor = async <T>(
  action: () => Promise<T> | T,
  assert: () => void | boolean
): Promise<T> => {
  // Hacked because await act isn't working as expected
  suppressNextActWarning();

  let result: T;
  await act(async () => {
    result = await action();
  });

  await reactWaitFor(assert);

  return result;
};

describe("useFetch", () => {
  it("sets the initial state to suspended", () => {
    const {
      result: {
        current: [, state],
      },
    } = renderHook(() => useFetch(() => void 0));

    expect(state.state).toEqual("suspended");
  });

  it("sets the state to loading when requested", async () => {
    let shouldResolve = false;

    const { result } = renderHook(() =>
      useFetch(() => {
        return new Promise<void>((resolve) => {
          setInterval(() => {
            if (shouldResolve) {
              resolve(void 0);
            }
          }, 10);
        });
      })
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
    const { result } = renderHook(() => useFetch(() => void 0));

    await waitFor(result.current[0], () =>
      expect(result.current[1].state).toEqual("success")
    );
  });

  it("sets the state to error when failed", async () => {
    const { result } = renderHook(() =>
      useFetch(() => {
        throw new Error();
      })
    );

    await waitFor(result.current[0], () =>
      expect(result.current[1].state).toEqual("error")
    );
  });

  it("returns the result of the promise when loaded", async () => {
    let expected = 5;

    const { result } = renderHook(() => useFetch(() => expected));

    const callbackResult = await waitFor(result.current[0], () => {
      expect(result.current[1].state).toEqual("success");
    });

    const actual = result.current[1];
    const actualValue = actual.state === "success" && actual.value;

    expect(actual.state).toEqual("success");
    expect(callbackResult).toEqual(expected);
    expect(actualValue).toEqual(expected);
  });
});
