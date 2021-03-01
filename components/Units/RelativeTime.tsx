import { FC } from "react";
import { ConfigType } from "dayjs";
import { ComponentWithAs, forwardRef, Text, TextProps } from "@chakra-ui/react";
import { firestore, formatRelativeDate } from "../../utils";

function canConvertToDate(
  date: ConfigType | firestore.Timestamp
): date is firestore.Timestamp {
  return !!(date as firestore.Timestamp).toDate;
}

function convertToDate(date: ConfigType | firestore.Timestamp): ConfigType {
  if (canConvertToDate(date)) {
    return date.toDate();
  }

  return date;
}

export const RelativeTime: FC<
  Omit<ComponentWithAs<"p", TextProps>, "children"> & {
    children: ConfigType | firestore.Timestamp;
  }
> = forwardRef((props, ref) => {
  const date = convertToDate(props.children);

  return (
    <Text ref={ref} {...props}>
      {formatRelativeDate(date)}
    </Text>
  );
});
