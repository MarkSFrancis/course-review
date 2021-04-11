import { render, mocked, screen, userEvents, actWithoutWarn } from "test-utils";
import {
  auth,
  firebaseAuth,
  microsoftAuthProvider,
  useUser,
} from "../../utils";
import { SignInOutButton } from "./SignInOutButton";

jest.mock("../../utils");
const authMock = mocked(auth);
const useUserMock = mocked(useUser);

describe("SignInOutButton", () => {
  it("Should show nothing when user state is not loaded", () => {
    useUserMock.mockReturnValue(undefined);

    const element = render(<SignInOutButton />);

    expect(element.container).toBeEmptyDOMElement();
  });

  it('Should show "Sign In" when user is not logged in', () => {
    useUserMock.mockReturnValue({});

    render(<SignInOutButton />);

    const signIn = screen.queryByText("Sign in");
    expect(signIn).toBeInTheDocument();
  });

  it('Should show "Sign Out" when user is logged in', () => {
    useUserMock.mockReturnValue({ user: {} as firebaseAuth.User });

    render(<SignInOutButton />);

    const signIn = screen.queryByText("Sign out");
    expect(signIn).toBeInTheDocument();
  });

  it('Should sign in when "Sign in" is clicked', async () => {
    let isSignedIn = false;
    useUserMock.mockImplementation(() =>
      isSignedIn ? { user: {} as firebaseAuth.User } : {}
    );

    authMock.signInWithPopup.mockImplementation(async () => {
      isSignedIn = true;
      return {} as firebaseAuth.UserCredential;
    });

    render(<SignInOutButton />);

    const signIn = screen.queryByText("Sign in");

    await actWithoutWarn(async () => {
      userEvents.click(signIn);

      await screen.findByText("Sign out");
    });

    expect(authMock.signInWithPopup).toHaveBeenCalledWith(
      microsoftAuthProvider
    );
  });

  it('Should sign out when "Sign out" is clicked', async () => {
    let isSignedIn = true;
    useUserMock.mockImplementation(() =>
      isSignedIn ? { user: {} as firebaseAuth.User } : {}
    );

    authMock.signOut.mockImplementation(async () => {
      isSignedIn = false;
    });

    render(<SignInOutButton />);

    const signOut = screen.queryByText("Sign out");

    await actWithoutWarn(async () => {
      userEvents.click(signOut);
      await screen.findByText(new RegExp("Sign in"));
    });

    expect(authMock.signOut).toHaveBeenCalled();
  });
});
