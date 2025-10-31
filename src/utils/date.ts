import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export const getCountdownToTime = (
  endTime: string | undefined,
  format: "HH:mm" | "HH:mm:ss" = "HH:mm"
): string => {
  if (!endTime || !dayjs(endTime).isValid())
    return format === "HH:mm:ss" ? "00:00:00" : "00:00";

  const now = dayjs();
  const end = dayjs(endTime);

  const diff = end.diff(now);

  if (diff <= 0) {
    return format === "HH:mm:ss" ? "00:00:00" : "00:00";
  }

  const countdown = dayjs.duration(diff);
  const hours = Math.floor(countdown.asHours()).toString().padStart(2, "0");
  const minutes = countdown.minutes().toString().padStart(2, "0");
  const seconds = countdown.seconds().toString().padStart(2, "0");

  if (format === "HH:mm:ss") {
    return `${hours}:${minutes}:${seconds}`;
  }

  return `${hours}:${minutes}`;
};

