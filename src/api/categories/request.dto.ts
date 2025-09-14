import { CommonRequestType } from "@/types";

export type GetCategoryListParams = {
  parentId?: string;
  isActive?: boolean;
} & CommonRequestType;
