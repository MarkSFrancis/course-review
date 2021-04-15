import { Menu } from "@chakra-ui/menu";
import { render, screen } from "test-utils";
import { AutocompleteProvider } from "../AutocompleteContext";
import { AutocompleteInputElement } from "./AutocompleteInputElement";

describe("AutocompleteInput", () => {
  it("should render the input to the dom", () => {
    render(
      <Menu>
        <AutocompleteProvider value={{ value: undefined, setValue: jest.fn() }}>
          <AutocompleteInputElement />
        </AutocompleteProvider>
      </Menu>
    );

    const input = screen.queryByRole("textbox");
    expect(input).toBeInTheDocument();
  });
});
