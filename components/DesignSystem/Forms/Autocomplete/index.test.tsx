import { Menu } from "@chakra-ui/menu";
import { ReactNode } from "react";
import { act } from "react-dom/test-utils";
import { render as reactRender, screen, userEvents } from "test-utils";
import {
  AutocompleteContext,
  AutocompleteProvider,
} from "./AutocompleteContext";
import { Autocomplete } from ".";

const render = (element: ReactNode, context?: Partial<AutocompleteContext>) => {
  const formattedContext: AutocompleteContext = {
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

describe("Autocomplete", () => {
  it("renders input but not dropdown when input is empty", () => {
    const suggestionText = "Hello world";

    render(
      <Autocomplete value={undefined} setValue={() => void 0}>
        {{ suggestions: [suggestionText] }}
      </Autocomplete>
    );

    const input = screen.queryByRole("textbox");
    const dropdown = screen.queryByLabelText("Show autocomplete suggestions");
    const suggestion = screen.queryByText(suggestionText);

    expect(input).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    expect(suggestion).not.toBeInTheDocument();
  });

  it("renders menu when dropdown is clicked", async () => {
    const suggestionText = "Hello world";

    render(
      <Autocomplete value={undefined} setValue={() => void 0}>
        {{ suggestions: [suggestionText] }}
      </Autocomplete>
    );

    const dropdown = screen.queryByLabelText("Show autocomplete suggestions");

    act(() => {
      userEvents.click(dropdown);
    });

    const suggestion = await screen.findByRole("menu");

    expect(suggestion).toBeInTheDocument();
  });

  it("renders menu when input has content entered", async () => {
    const suggestionText = "Hello world";

    render(
      <Autocomplete value={suggestionText} setValue={() => void 0}>
        {{ suggestions: [suggestionText] }}
      </Autocomplete>
    );

    const input = screen.queryByRole("textbox");

    act(() => {
      userEvents.type(input, suggestionText);
    });

    const suggestion = await screen.findByRole("menu");
    expect(suggestion).toBeInTheDocument();
  });

  it("filters suggestions when input has content entered", async () => {
    const search = "hello";
    const suggestionText = "Hello world";

    render(
      <Autocomplete value={search} setValue={() => void 0}>
        {{ suggestions: [suggestionText, "Irrelevant content"] }}
      </Autocomplete>
    );

    const input = screen.queryByRole("textbox");

    act(() => {
      userEvents.type(input, search);
    });

    const suggestions = await screen.findAllByRole("menu");
    expect(suggestions).toHaveLength(1);
  });
});
