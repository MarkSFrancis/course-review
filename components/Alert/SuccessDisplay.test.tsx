import { ErrorDisplay } from ".";
import { render, screen } from "test-utils/index";

describe("SuccessDisplay", () => {
  it("renders children when provided", () => {
    const childId = "test-id";
    const children = <div data-testid={childId}>error content</div>;
    render(<ErrorDisplay>{children}</ErrorDisplay>);

    expect(screen.queryByTestId(childId)).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    const description = "Test description";
    render(<ErrorDisplay description={description}>content</ErrorDisplay>);

    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent(new RegExp(description));
  });
});
