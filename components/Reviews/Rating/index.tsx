import { FC } from "react";
import { StarIcon } from "design-system";
import { Tooltip, Text, useTheme } from "design-system";

export interface AverageRating {
  totalRatings: number;
  averageRating: number;
}

const Star: FC<{ filled?: boolean }> = (props) => {
  const theme = useTheme();

  return (
    <StarIcon
      color={props.filled ? theme.colors.current : "gray.500"}
    ></StarIcon>
  );
};

export const AverageRating: FC<AverageRating> = (props) => {
  const title = `${props.averageRating} avg. out of ${props.totalRatings} ratings`;

  return (
    <Tooltip label={title}>
      <Rating rating={props.averageRating} />
    </Tooltip>
  );
};

export const Rating: FC<{ rating: number }> = (props) => {
  const starsToShow = Math.min(Math.max(Math.round(props.rating), 0), 5);
  const starsToHide = 5 - starsToShow;

  return (
    <Text as="span">
      {Array.from(new Array(starsToShow)).map((_r, i) => (
        <Star filled key={i} />
      ))}
      {Array.from(new Array(starsToHide)).map((_r, i) => (
        <Star key={i} />
      ))}
    </Text>
  );
};
