import { CommonRequestType } from "@/types";

export type GetOrderListParams = {
  search?: string;
  userId?: string;
} & CommonRequestType;
