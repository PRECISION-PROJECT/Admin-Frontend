import httpInstance from "../http-instance";
import { GetProductLowStockListParams } from "./request.dto";
import { GetProductLowStockListResponse } from "./response.dto";

export const getProductLowStockList = (
  params: GetProductLowStockListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetProductLowStockListResponse>("/admin/products/low-stock", { params, signal })
    .then((res) => res);
};
