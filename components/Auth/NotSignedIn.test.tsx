import { render, screen } from "test-utils";
import { NotSignedIn } from "./NotSignedIn";

describe("NotSignedIn", () => {
  it("should render as an alert", () => {
    render(<NotSignedIn />);

    const error = screen.queryByRole("alert");

    expect(error).toBeInTheDocument();
  });

  it('should render "You must be signed in to access this" if no children are provided', () => {
    render(<NotSignedIn />);

    const error = screen.queryByText("You must be signed in to access this");

    expect(error).toBeInTheDocument();
  });

  it("should render children when provided", () => {
    const testId = "test-child";
    render(
      <NotSignedIn>
        <div data-testid={testId}></div>
      </NotSignedIn>
    );

    const error = screen.queryByTestId(testId);

    expect(error).toBeInTheDocument();
  });
});
