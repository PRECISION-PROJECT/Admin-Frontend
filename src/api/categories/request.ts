import httpInstance from "../http-instance";
import { GetCategoryListParams } from "./request.dto";
import { GetCategoryListResponse, Category } from "./response.dto";

export const getCategoryList = (
  params: GetCategoryListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetCategoryListResponse>("/categories", { params, signal })
    .then((res) => res);
};

export const getAllCategories = (signal?: AbortSignal) => {
  return httpInstance
    .get<Category[]>("/categories/all", { signal })
    .then((res) => res);
};
