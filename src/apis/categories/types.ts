import { CommonRequestType, IPaginatedResponseType } from "@/types";

export type GetCategoryListParams = {
  isActive?: string;
} & CommonRequestType;

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

export type GetCategoryListResponse = IPaginatedResponseType<Category[]>;

export type AddCategoryRequest = {
  name: string;
  description: string;
  parentId: string;
  imageUrl: string;
  slug: string;
  sortOrder: number;
  isActive: boolean;
};

export type UpdateCategoryRequest = AddCategoryRequest & {
  id: string;
};

export type DeleteCategoryRequest = {
  id: string;
};
