import httpInstance from "../http-instance";
import { GetProductInventoryListParams } from "./request.dto";
import { GetProductInventoryListResponse } from "./response.dto";

export const getProductInventoryList = (
  params: GetProductInventoryListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetProductInventoryListResponse>("/admin/products/inventory", { params, signal })
    .then((res) => res);
};
