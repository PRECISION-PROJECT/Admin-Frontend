import { CommonRequestType } from "@/types";

export type GetProductListParams = {
  search?: string;
  categoryId?: string;
  types?: string[];
  status?: string;
  isFeatured?: boolean;
  minPrice?: number;
  maxPrice?: number;
  material?: string;
  color?: string;
  finish?: string;
  sortBy?: string;
  sortOrder?: string;
  includeCategory?: boolean;
} & CommonRequestType;
