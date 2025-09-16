import httpInstance from "../http-instance";
import { GetProductListParams, CreateProductParams } from "./request.dto";
import { GetProductListResponse, Product } from "./response.dto";

export const getProductList = (
  params: GetProductListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetProductListResponse>("/products", { params, signal })
    .then((res) => res);
};

export const getProductFeatureList = (
  params: GetProductListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetProductListResponse>("/products/featured", { params, signal })
    .then((res) => res);
};

export const createProduct = (
  data: CreateProductParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .post<Product>("/products", data, { signal })
    .then((res) => res);
};
