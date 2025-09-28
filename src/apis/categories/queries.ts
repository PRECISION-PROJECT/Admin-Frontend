import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";

import { KEYS } from "./keys";
import {
  AddCategoryRequest,
  Category,
  DeleteCategoryRequest,
  GetCategoryListParams,
  GetCategoryListResponse,
  UpdateCategoryRequest,
} from "./types";
import {
  addCategory,
  deleteCategory,
  getAllCategories,
  getCategoryDetail,
  getCategoryList,
  getCategoryTree,
  updateCategory,
} from "./requests";
import { IAxiosResponse } from "@/types/axios";

export const useGetCategoryList = (
  params: GetCategoryListParams,
  options?: Omit<UseQueryOptions<GetCategoryListResponse, Error>, "queryKey">
) => {
  return useQuery<GetCategoryListResponse, Error>({
    queryKey: [KEYS.CATEGORIES_LIST, params],
    queryFn: ({ signal }) => getCategoryList(params, signal),
    ...options,
  });
};

export const useGetAllCategories = (
  options?: Omit<UseQueryOptions<Category[], Error>, "queryKey">
) => {
  return useQuery<Category[], Error>({
    queryKey: [KEYS.CATEGORIES_ALL],
    queryFn: ({ signal }) => getAllCategories(signal),
    ...options,
  });
};

export const useGetCategoryTree = (
  options?: Omit<UseQueryOptions<Category[], Error>, "queryKey">
) => {
  return useQuery<Category[], Error>({
    queryKey: [KEYS.CATEGORIES_TREE],
    queryFn: ({ signal }) => getCategoryTree(signal),
    ...options,
  });
};

export const useGetCategoryDetail = (
  id: string,
  options?: Omit<UseQueryOptions<Category, Error>, "queryKey">
) => {
  return useQuery<Category, Error>({
    queryKey: [KEYS.CATEGORIES_DETAIL, id],
    queryFn: ({ signal }) => getCategoryDetail(id, signal),
    ...options,
  });
};

export const useAddCategoryMutation = () => {
  return useMutation<Category, IAxiosResponse, AddCategoryRequest>({
    mutationKey: [KEYS.CATEGORIES_LIST],
    mutationFn: (data) => addCategory(data),
  });
};

export const useUpdateCategoryMutation = () => {
  return useMutation<Category, IAxiosResponse, UpdateCategoryRequest>({
    mutationKey: [KEYS.CATEGORIES_DETAIL],
    mutationFn: (data) => updateCategory(data),
  });
};

export const useDeleteCategoryMutation = () => {
  return useMutation<Category, IAxiosResponse, DeleteCategoryRequest>({
    mutationKey: [KEYS.CATEGORIES_DETAIL],
    mutationFn: (data) => deleteCategory(data),
  });
};
