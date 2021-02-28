import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const formatRelativeDate = (date: dayjs.ConfigType) => {
  return dayjs(date).from(dayjs());
};
