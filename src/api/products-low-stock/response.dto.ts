import { PaginatedResponseType } from "@/types";

export interface Category {
  id: string;
  name: string;
  description: string;
  parentId?: string | null;
  imageUrl?: string | null;
  slug: string;
  sortOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  parent?: Category | null;
  children?: Category[];
}

export interface ProductLowStock {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number | null;
  sku: string;
  type: string;
  status: string;
  categoryId?: string | null;
  imageUrl?: string | null;
  images?: string[];
  stockQuantity?: number | null;
  unit?: string | null;
  weight?: number | null;
  length?: number | null;
  width?: number | null;
  height?: number | null;
  material?: string | null;
  finish?: string | null;
  color?: string | null;
  slug: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  keywords?: string[];
  viewCount: number;
  sortOrder: number;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  category?: Category | null;
}

export type GetProductLowStockListResponse = PaginatedResponseType<ProductLowStock>;
