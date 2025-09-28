import httpInstance from "../http-instance";
import { KEYS } from "./keys";
import {
  CreateProductRequest,
  DeleteProductRequest,
  GetProductListParams,
  GetProductListResponse,
  IProduct,
  UpdateProductRequest,
} from "./types";

export const getProductList = (
  params: GetProductListParams,
  signal?: AbortSignal
): Promise<GetProductListResponse> => {
  return httpInstance
    .get<GetProductListResponse>(KEYS.PRODUCTS_LIST, { params, signal })
    .then((res) => res);
};

export const getProductListInventory = (
  params: GetProductListParams,
  signal?: AbortSignal
): Promise<GetProductListResponse> => {
  return httpInstance
    .get<GetProductListResponse>(KEYS.PRODUCT_LIST_INVENTORY, { params, signal })
    .then((res) => res);
};

export const getProductListLowStock = (
  params: GetProductListParams,
  signal?: AbortSignal
): Promise<GetProductListResponse> => {
  return httpInstance
    .get<GetProductListResponse>(KEYS.PRODUCT_LIST_LOW_STOCK, { params, signal })
    .then((res) => res);
};

export const getProductFeatureList = (
  params: GetProductListParams,
  signal?: AbortSignal
): Promise<GetProductListResponse> => {
  return httpInstance
    .get<GetProductListResponse>(KEYS.PRODUCT_FEATURE_LIST, { params, signal })
    .then((res) => res);
};

export const getProductByCategory = (
  params: GetProductListParams,
  signal?: AbortSignal
): Promise<GetProductListResponse> => {
  const url = KEYS.PRODUCT_BY_CATEGORY.replace(
    ":categoryId",
    params.categoryId!
  );
  return httpInstance
    .get<GetProductListResponse>(url, { params, signal })
    .then((res) => res);
};

export const getProductDetail = (
  id: string,
  signal?: AbortSignal
): Promise<IProduct> => {
  return httpInstance
    .get<IProduct>(KEYS.PRODUCTS_DETAIL.replace(":id", id), { signal })
    .then((res) => res);
};

export const createProduct = (
  data: CreateProductRequest,
  signal?: AbortSignal
): Promise<IProduct> => {
  return httpInstance
    .post<IProduct>(KEYS.PRODUCTS_LIST, data, { signal })
    .then((res) => res);
};

export const updateProduct = (
  data: UpdateProductRequest,
  signal?: AbortSignal
): Promise<IProduct> => {
  const url = KEYS.PRODUCTS_DETAIL.replace(":id", data.id);
  return httpInstance.patch<IProduct>(url, data, { signal }).then((res) => res);
};

export const deleteProduct = (
  data: DeleteProductRequest,
  signal?: AbortSignal
): Promise<IProduct> => {
  const url = KEYS.PRODUCTS_DETAIL.replace(":id", data.id);
  return httpInstance.delete<IProduct>(url, { signal }).then((res) => res);
};
