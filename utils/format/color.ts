import Color from "color";

export type ColorParam =
  | Color
  | string
  | ArrayLike<number>
  | number
  | { [key: string]: any };

export const getForegroundColor = <T extends ColorParam>(
  backgroundColor: T
) => {
  if (toColor(backgroundColor).isLight()) {
    return "rgb(0, 0, 0)";
  } else {
    return "rgb(255, 255, 255)";
  }
};

export const toColor = <T extends ColorParam>(color: T) => Color(color);
