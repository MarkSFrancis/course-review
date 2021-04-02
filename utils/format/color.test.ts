import { getForegroundColor, toColor } from "./color";

describe("getForegroundColor", () => {
  it("gets white when background is black", () => {
    const background = toColor("black");
    const foreground = getForegroundColor(background);

    expect(foreground).toEqual(toColor("white"));
  });

  it("gets black when background is white", () => {
    const background = toColor("white");
    const foreground = getForegroundColor(background);

    expect(foreground).toEqual(toColor("black"));
  });
});
