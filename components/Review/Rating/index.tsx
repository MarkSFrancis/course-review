import { FC } from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Tooltip, Text, useTheme } from "@chakra-ui/react";

export interface AverageRating {
  totalRatings: number;
  averageRating: number;
}

const Star: FC<{ filled?: boolean }> = (props) => {
  const theme = useTheme();

  return (
    <StarIcon color={props.filled ? theme.colors.current : "gray.500"}></StarIcon>
  );
};

export const AverageRating: FC<AverageRating> = (props) => {
  const starsToShow = Math.min(Math.max(Math.round(props.averageRating), 0), 5);
  const starsToHide = 5 - starsToShow;
  const title = `${props.averageRating} avg. out of ${props.totalRatings} ratings`;

  return (
    <Tooltip label={title}>
      <Text as="span">
        {Array.from(new Array(starsToShow)).map((_r, i) => (
          <Star filled key={i} />
        ))}
        {Array.from(new Array(starsToHide)).map((_r, i) => (
          <Star key={i} />
        ))}
      </Text>
    </Tooltip>
  );
};
