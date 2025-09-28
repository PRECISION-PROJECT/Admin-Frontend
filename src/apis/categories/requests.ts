import httpInstance from "../http-instance";
import { KEYS } from "./keys";
import {
  Category,
  GetCategoryListParams,
  GetCategoryListResponse,
  AddCategoryRequest,
  UpdateCategoryRequest,
  DeleteCategoryRequest,
} from "./types";

export const getCategoryList = (
  params: GetCategoryListParams,
  signal?: AbortSignal
): Promise<GetCategoryListResponse> => {
  return httpInstance
    .get<GetCategoryListResponse>(KEYS.CATEGORIES_LIST, { params, signal })
    .then((res) => res);
};

export const getAllCategories = (signal?: AbortSignal): Promise<Category[]> => {
  return httpInstance
    .get<Category[]>(KEYS.CATEGORIES_ALL, { signal })
    .then((res) => res);
};

export const getCategoryTree = (signal?: AbortSignal): Promise<Category[]> => {
  return httpInstance
    .get<Category[]>(KEYS.CATEGORIES_TREE, { signal })
    .then((res) => res);
};

export const getCategoryDetail = (
  id: string,
  signal?: AbortSignal
): Promise<Category> => {
  const url = KEYS.CATEGORIES_DETAIL.replace(":id", id);
  return httpInstance.get<Category>(url, { signal }).then((res) => res);
};

export const addCategory = (
  request: AddCategoryRequest,
  signal?: AbortSignal
): Promise<Category> => {
  return httpInstance
    .post<Category>(KEYS.CATEGORIES_LIST, request, { signal })
    .then((res) => res);
};

export const updateCategory = (
  request: UpdateCategoryRequest,
  signal?: AbortSignal
): Promise<Category> => {
  const url = KEYS.CATEGORIES_DETAIL.replace(":id", request.id);
  return httpInstance
    .patch<Category>(url, request, { signal })
    .then((res) => res);
};

export const deleteCategory = (
  request: DeleteCategoryRequest,
  signal?: AbortSignal
): Promise<Category> => {
  const url = KEYS.CATEGORIES_DETAIL.replace(":id", request.id);
  return httpInstance.delete<Category>(url, { signal }).then((res) => res);
};
