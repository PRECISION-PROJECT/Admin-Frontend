import { useQuery } from "@tanstack/react-query";
import { GetOrderListParams } from "./request.dto";
import { GetOrderListResponse } from "./response.dto";
import { getOrderList } from "./request";

export const useGetOrderList = (
  params: GetOrderListParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetOrderListResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["order-list", params],
    queryFn: ({ signal }) => getOrderList(params, signal),
    ...queryParams,
  });
};
