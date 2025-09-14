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

export type GetCategoryListResponse = PaginatedResponseType<Category>;
