import { Menu, MenuProps } from "@chakra-ui/menu";
import { ReactNode } from "react";
import {
  actWithoutWarn,
  render as reactRender,
  screen,
  userEvents,
} from "test-utils";
import { AutocompleteDropdown } from "./AutocompleteDropdown";

const render = (element: ReactNode, props?: Omit<MenuProps, "children">) => {
  reactRender(<Menu {...(props ?? {})}>{element}</Menu>);
};

describe("AutocompleteDropdown", () => {
  it("shows 'Show autocomplete suggestions' when closed", () => {
    render(<AutocompleteDropdown />);

    const dropdown = screen.queryByLabelText("Show autocomplete suggestions");

    expect(dropdown).toBeInTheDocument();
  });

  it("shows 'Hide autocomplete suggestions' when opened", async () => {
    render(<AutocompleteDropdown />, { isOpen: true });

    const dropdown = screen.queryByLabelText("Hide autocomplete suggestions");

    expect(dropdown).toBeInTheDocument();
  });

  it("toggles the menu when opened", async () => {
    const onOpen = jest.fn();
    render(<AutocompleteDropdown />, { onOpen });

    let dropdown = screen.queryByLabelText("Show autocomplete suggestions");

    await actWithoutWarn(async () => {
      userEvents.click(dropdown);
      dropdown = await screen.findByText("Hide autocomplete suggestions");
    });

    expect(onOpen).toHaveBeenCalledTimes(1);
  });
});
