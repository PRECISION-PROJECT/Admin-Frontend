import { IAxiosResponse } from "@/types/axios";
import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { KEYS } from "./keys";
import {
  createProduct,
  deleteProduct,
  getProductByCategory,
  getProductDetail,
  getProductFeatureList,
  getProductList,
  getProductListInventory,
  getProductListLowStock,
  updateProduct,
} from "./requests";
import {
  CreateProductRequest,
  DeleteProductRequest,
  GetProductListParams,
  GetProductListResponse,
  IProduct,
  UpdateProductRequest,
} from "./types";

export const useGetProductList = (
  params: GetProductListParams,
  options?: Omit<UseQueryOptions<GetProductListResponse, Error>, "queryKey">
) => {
  return useQuery<GetProductListResponse, Error>({
    queryKey: [KEYS.PRODUCTS_LIST, params],
    queryFn: ({ signal }) => getProductList(params, signal),
    ...options,
  });
};

export const useGetProductListInventory = (
  params: GetProductListParams,
  options?: Omit<UseQueryOptions<GetProductListResponse, Error>, "queryKey">
) => {
  return useQuery<GetProductListResponse, Error>({
    queryKey: [KEYS.PRODUCT_LIST_INVENTORY, params],
    queryFn: ({ signal }) => getProductListInventory(params, signal),
    ...options,
  });
};

export const useGetProductListLowStock = (
  params: GetProductListParams,
  options?: Omit<UseQueryOptions<GetProductListResponse, Error>, "queryKey">
) => {
  return useQuery<GetProductListResponse, Error>({
    queryKey: [KEYS.PRODUCT_LIST_LOW_STOCK, params],
    queryFn: ({ signal }) => getProductListLowStock(params, signal),
    ...options,
  });
};

export const useGetProductFeatureList = (
  params: GetProductListParams,
  options?: Omit<UseQueryOptions<GetProductListResponse, Error>, "queryKey">
) => {
  return useQuery<GetProductListResponse, Error>({
    queryKey: [KEYS.PRODUCT_FEATURE_LIST, params],
    queryFn: ({ signal }) => getProductFeatureList(params, signal),
    ...options,
  });
};

export const useGetProductByCategory = (
  params: GetProductListParams,
  options?: Omit<UseQueryOptions<GetProductListResponse, Error>, "queryKey">
) => {
  return useQuery<GetProductListResponse, Error>({
    queryKey: [KEYS.PRODUCT_BY_CATEGORY, params.categoryId],
    queryFn: ({ signal }) => getProductByCategory(params, signal),
    ...options,
  });
};

export const useGetProductDetail = (
  id: string,
  options?: Omit<UseQueryOptions<IProduct, Error>, "queryKey">
) => {
  return useQuery<IProduct, Error>({
    queryKey: [KEYS.PRODUCTS_DETAIL, id],
    queryFn: ({ signal }) => getProductDetail(id, signal),
    ...options,
  });
};

export const useCreateProductMutation = () => {
  return useMutation<IProduct, IAxiosResponse, CreateProductRequest>({
    mutationKey: [KEYS.PRODUCTS_LIST],
    mutationFn: (data) => createProduct(data),
  });
};

export const useUpdateProductMutation = () => {
  return useMutation<IProduct, IAxiosResponse, UpdateProductRequest>({
    mutationKey: [KEYS.PRODUCTS_DETAIL],
    mutationFn: (data) => updateProduct(data),
  });
};

export const useDeleteProductMutation = () => {
  return useMutation<IProduct, IAxiosResponse, DeleteProductRequest>({
    mutationKey: [KEYS.PRODUCTS_DETAIL],
    mutationFn: (data) => deleteProduct(data),
  });
};
