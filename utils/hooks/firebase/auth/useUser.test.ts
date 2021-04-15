import { useUser } from "./useUser";
import { auth, firebaseAuth } from "../../../firebase";
import { act, renderHook, mocked } from "test-utils";

jest.mock("../../../firebase");
const authMock = mocked(auth);

describe("useUser", () => {
  let setUser: (user: firebaseAuth.User) => void;

  beforeEach(() => {
    jest.resetAllMocks();
    authMock.onAuthStateChanged.mockImplementation((callback) => {
      setUser = (user) => {
        typeof callback === "function" ? callback(user) : callback.next(user);
      };
      return () => void 0;
    });
  });

  it("sets isLoading to true and user to undefined when user is not loaded", () => {
    const { result } = renderHook(() => useUser());

    expect(result.current.isLoadingUser).toBe(true);
    expect(result.current.user).toBeUndefined();
  });

  it("sets isLoading to false and user to undefined when user is not logged in", () => {
    const { result } = renderHook(() => useUser());

    act(() => {
      setUser(undefined);
    });

    expect(result.current.isLoadingUser).toBe(false);
    expect(result.current.user).toBeUndefined();
  });

  it("sets isLoading to false and user to a value when user is logged in", () => {
    const { result } = renderHook(() => useUser());
    let user = { uid: "12" } as firebaseAuth.User;

    act(() => {
      setUser(user);
    });

    expect(result.current.isLoadingUser).toBe(false);
    expect(result.current.user).toBe(user);
  });
});
