import { useQuery } from "@tanstack/react-query";
import { GetProductInventoryListParams } from "./request.dto";
import { GetProductInventoryListResponse } from "./response.dto";
import { getProductInventoryList } from "./request";

export const useGetProductInventoryList = (
  params: GetProductInventoryListParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetProductInventoryListResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["product-inventory-list", params],
    queryFn: ({ signal }) => getProductInventoryList(params, signal),
    ...queryParams,
  });
};
