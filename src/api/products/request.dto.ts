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

export type CreateProductParams = {
  name: string;
  description?: string;
  price: number;
  salePrice?: number;
  sku: string;
  type: string;
  status: string;
  categoryId?: string;
  imageUrl?: string;
  images?: string[];
  stockQuantity?: number;
  unit?: string;
  weight?: number;
  length?: number;
  width?: number;
  height?: number;
  material?: string;
  finish?: string;
  color?: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  sortOrder?: number;
  isFeatured?: boolean;
};
