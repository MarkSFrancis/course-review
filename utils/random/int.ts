export const rndInt = (min: number, max: number) => {
  const range = Math.floor(Math.random() * (max - min));
  return min + range;
};
