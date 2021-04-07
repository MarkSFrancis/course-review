import { render, screen } from "@testing-library/react";
import { ErrorDisplay } from ".";

describe("ErrorDisplay", () => {
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

  it("renders err when provided", () => {
    const err = "Test error";
    render(<ErrorDisplay err={err} />);

    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent(new RegExp(err));
  });

  it("renders err and children when both are provided", () => {
    const err = "Test error";
    const childId = "test-id";
    const children = <div data-testid={childId}>error content</div>;
    render(<ErrorDisplay err={err}>{children}</ErrorDisplay>);

    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent(new RegExp(err));
    expect(screen.findByTestId(childId)).toBeInTheDocument();
  });
});
