import { GenericErrorDisplay } from "./GenericErrorDisplay";
import { render, screen } from "@testing-library/react";

describe("GenericErrorDisplay", () => {
  it("should display the value if it is not an object", () => {
    const err = false;
    render(<GenericErrorDisplay err={err} />);

    expect(screen.queryByText(/false/i)).toBeInTheDocument();
  });

  it("should display the serialised error if it is an object", () => {
    const err = { value: "myVal" };
    render(<GenericErrorDisplay err={err} />);

    expect(screen.queryByText(new RegExp(err.value))).toBeInTheDocument();
  });
});
