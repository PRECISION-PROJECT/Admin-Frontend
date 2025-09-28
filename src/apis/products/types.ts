import { CommonRequestType, IPaginatedResponseType } from "@/types";
import { Category } from "../categories";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  salePrice: string;
  sku: string;
  type: string;
  status: string;
  categoryId: string;
  imageUrl: string;
  images: string[];
  stockQuantity: number;
  unit: string;
  weight: string;
  length: string;
  width: string;
  height: string;
  material: string;
  finish: string;
  color: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  viewCount: number;
  sortOrder: number;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  category?: Category;
}

export interface CreateProductRequest {
  name: string;
  description: string;
  price: number;
  salePrice: number;
  sku: string;
  type: string;
  status: string;
  categoryId: string;
  imageUrl: string;
  images: string[];
  stockQuantity: number;
  unit: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  material: string;
  finish: string;
  color: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  sortOrder: number;
  isFeatured: boolean;
}

export interface UpdateProductRequest extends CreateProductRequest {
  id: string;
}

export interface DeleteProductRequest {
  id: string;
}

export type GetProductListResponse = IPaginatedResponseType<IProduct[]>;

export interface GetProductListParams extends CommonRequestType {
  categoryId?: string;
  types?: string;
  status?: string;
  isFeatured?: string;
  material?: string;
  color?: string;
  finish?: string;
  includeCategory?: boolean
}
