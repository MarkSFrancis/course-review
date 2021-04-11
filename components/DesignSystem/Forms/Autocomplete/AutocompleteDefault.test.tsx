import { Menu } from "@chakra-ui/menu";
import { ReactNode } from "react";
import { act } from "react-dom/test-utils";
import { render as reactRender, screen, userEvents } from "test-utils";
import {
  AutocompleteContext,
  AutocompleteProvider,
} from "./AutocompleteContext";
import { AutocompleteDefault } from "./AutocompleteDefault";

const render = (element: ReactNode, context?: Partial<AutocompleteContext>) => {
  const formattedContext: AutocompleteContext = {
    suggestions: [],
    value: undefined,
    setValue: () => void 0,
    ...(context ?? {}),
  };

  reactRender(
    <Menu>
      <AutocompleteProvider value={formattedContext}>
        {element}
      </AutocompleteProvider>
    </Menu>
  );
};

describe("AutocompleteDefault", () => {
  it("renders input and dropdown", () => {
    const suggestionText = "Hello world";
    render(<AutocompleteDefault />, { suggestions: [suggestionText] });

    const input = screen.queryByRole("textbox");
    const dropdown = screen.queryByLabelText("Show autocomplete suggestions");
    const suggestion = screen.queryByText(suggestionText);

    expect(input).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(suggestion).not.toBeVisible();
  });

  it("renders menu when dropdown is clicked", async () => {
    const suggestionText = "Hello world";
    render(<AutocompleteDefault />, { suggestions: [suggestionText] });

    const dropdown = screen.queryByLabelText("Show autocomplete suggestions");

    act(() => {
      userEvents.click(dropdown);
    });

    const suggestion = await screen.findByRole("menu");

    expect(suggestion).toBeVisible();
  });
});
