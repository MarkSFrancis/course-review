import Color from "color";
import { rndInt } from "./int";

export const rndColor = (pastelColor = false) => {
  const h = rndInt(0, 360);
  const s = pastelColor ? 80 : rndInt(0, 100);
  const l = pastelColor ? 85 : rndInt(0, 100);

  return Color.hsl({
    h,
    s,
    l,
  });
};
