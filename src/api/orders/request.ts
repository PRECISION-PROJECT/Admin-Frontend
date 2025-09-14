import httpInstance from "../http-instance";
import { GetOrderListParams } from "./request.dto";
import { GetOrderListResponse } from "./response.dto";

export const getOrderList = (
  params: GetOrderListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetOrderListResponse>("/orders", { params, signal })
    .then((res) => res);
};
