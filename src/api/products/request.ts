import httpInstance from "../http-instance";
import { GetProductListParams } from "./request.dto";
import { GetProductListResponse } from "./response.dto";

export const getProductList = (
  params: GetProductListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetProductListResponse>("/products", { params, signal })
    .then((res) => res);
};
