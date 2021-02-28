import { FC } from "react";
import { ConfigType } from "dayjs";
import { ComponentWithAs, forwardRef, Text, TextProps } from "@chakra-ui/react";
import { formatRelativeDate } from "../../utils";

type CanConvertToDate = { toDate: () => Date };

function canConvertToDate(
  date: ConfigType | CanConvertToDate
): date is CanConvertToDate {
  return !!(date as CanConvertToDate).toDate;
}

function convertToDate(date: ConfigType | CanConvertToDate): ConfigType {
  if (canConvertToDate(date)) {
    return date.toDate();
  }

  return date;
}

export const RelativeTime: FC<
  Omit<ComponentWithAs<"p", TextProps>, "children"> & {
    children: ConfigType | CanConvertToDate;
  }
> = forwardRef((props, ref) => {
  const date = convertToDate(props.children);

  return (
    <Text ref={ref} {...props}>
      {formatRelativeDate(date)}
    </Text>
  );
});
