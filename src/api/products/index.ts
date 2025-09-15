import { useQuery } from "@tanstack/react-query";
import { GetProductListParams } from "./request.dto";
import { GetProductListResponse } from "./response.dto";
import { getProductList, getProductFeatureList } from "./request";

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
