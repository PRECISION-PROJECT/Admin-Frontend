import { CommonRequestType } from "@/types";

export type GetAppointmentListParams = {
  search?: string;
  userId?: string;
} & CommonRequestType;
