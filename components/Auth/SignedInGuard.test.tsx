import { render, screen } from "test-utils";
import { mocked } from "ts-jest/utils";
import { firebaseAuth, useUser } from "../../utils";
import { SignedInGuard } from "./SignedInGuard";

jest.mock("../../utils");
const useUserMock = mocked(useUser);

describe("SignedInGuard", () => {
  it("should render spinner while loading", () => {
    useUserMock.mockReturnValue({ isLoadingUser: true, user: undefined });

    render(<SignedInGuard />);

    const spinner = screen.queryByRole("status");

    expect(spinner).toBeInTheDocument();
  });

  it('should render "You must be signed in to access this" when not signed in', () => {
    useUserMock.mockReturnValue({ isLoadingUser: false, user: undefined });

    render(<SignedInGuard />);

    const error = screen.queryByText("You must be signed in to access this");

    expect(error).toBeInTheDocument();
  });

  it("should render notSignedIn when not logged in", () => {
    useUserMock.mockReturnValue({ isLoadingUser: false, user: undefined });

    const testNotSignedInId = "not-signed-in-id";
    const testChildId = "child-id";

    render(
      <SignedInGuard notSignedIn={<div data-testid={testNotSignedInId}></div>}>
        <div data-testid={testChildId}></div>
      </SignedInGuard>
    );

    const error = screen.queryByTestId(testNotSignedInId);
    const child = screen.queryByTestId(testChildId);

    expect(error).toBeInTheDocument();
    expect(child).not.toBeInTheDocument();
  });

  it("should render children when signed in", () => {
    useUserMock.mockReturnValue({
      isLoadingUser: false,
      user: { uid: "1" } as firebaseAuth.User,
    });

    const testNotSignedInId = "not-signed-in-child";
    const testChildId = "child-id";

    render(
      <SignedInGuard notSignedIn={<div data-testid={testNotSignedInId}></div>}>
        <div data-testid={testChildId}></div>
      </SignedInGuard>
    );

    const error = screen.queryByTestId(testNotSignedInId);
    const child = screen.queryByTestId(testChildId);

    expect(error).not.toBeInTheDocument();
    expect(child).toBeInTheDocument();
  });
});
