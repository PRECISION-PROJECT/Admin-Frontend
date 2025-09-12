import dayjs from "dayjs";

export const formatDate = (date?: string, format: string = "DD-MM-YYYY") => {
  if (!date) return "--";
  return dayjs(new Date(date)).format(format);
};
