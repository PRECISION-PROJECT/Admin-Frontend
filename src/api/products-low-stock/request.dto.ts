import { CommonRequestType } from "@/types";

export type GetProductLowStockListParams = {
  search?: string;
  page: number;
  size: number;
} & CommonRequestType;
