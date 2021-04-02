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
    return toColor('black');
  } else {
    return toColor('white');
  }
};

export const toColor = <T extends ColorParam>(color: T) => Color(color);
