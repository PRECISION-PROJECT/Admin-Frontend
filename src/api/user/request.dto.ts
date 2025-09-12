import { CommonRequestType } from "@/types";

export type GetUserListParams = {
  startDate?: string;
  endDate?: string;
  status?: string;
} & CommonRequestType;
