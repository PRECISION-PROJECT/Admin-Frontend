import { useQuery } from "@tanstack/react-query";
import { GetProductLowStockListParams } from "./request.dto";
import { GetProductLowStockListResponse } from "./response.dto";
import { getProductLowStockList } from "./request";

export const useGetProductLowStockList = (
  params: GetProductLowStockListParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetProductLowStockListResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["product-low-stock-list", params],
    queryFn: ({ signal }) => getProductLowStockList(params, signal),
    ...queryParams,
  });
};
