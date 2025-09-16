import { useMutation, useQuery } from "@tanstack/react-query";
import { createProduct, getProductFeatureList, getProductList } from "./request";
import { CreateProductParams, GetProductListParams } from "./request.dto";
import { GetProductListResponse } from "./response.dto";

export const useGetProductList = (
  params: GetProductListParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetProductListResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["product-list", params],
    queryFn: ({ signal }) => getProductList(params, signal),
    ...queryParams,
  });
};

export const useGetProductFeatureList = (
  params: GetProductListParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetProductListResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["product-feature-list", params],
    queryFn: ({ signal }) => getProductFeatureList(params, signal),
    ...queryParams,
  });
};

export const useCreateProduct = () => {
  return useMutation({
    mutationKey: ["create-product"],
    mutationFn: (data: CreateProductParams) => createProduct(data),
  });
};
