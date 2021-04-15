import { render, screen } from "test-utils";
import { AutocompleteInputElement } from "./AutocompleteInputElement";

describe("AutocompleteInput", () => {
  it("should render the input to the dom", () => {
    render(<AutocompleteInputElement />);

    const input = screen.queryByRole("textbox");
    expect(input).toBeInTheDocument();
  });
});
