import httpInstance from "../http-instance";
import { KEYS } from "./keys";
import {
  AddOrderRequest,
  DeleteOrderRequest,
  GetOrderListParams,
  GetOrderListResponse,
  IOrder,
  UpdateOrderRequest,
} from "./types";

export const getOrderList = (
  params: GetOrderListParams,
  signal?: AbortSignal
): Promise<GetOrderListResponse> => {
  return httpInstance
    .get<GetOrderListResponse>(KEYS.ORDER_LIST, { params, signal })
    .then((res) => res);
};

export const getOrderDetail = (
  id: string,
  signal?: AbortSignal
): Promise<IOrder> => {
  return httpInstance
    .get<IOrder>(KEYS.ORDER_DETAIL.replace(":id", id), { signal })
    .then((res) => res);
};

export const addOrder = (
  request: AddOrderRequest,
  signal?: AbortSignal
): Promise<IOrder> => {
  return httpInstance
    .post<IOrder>(KEYS.ORDER_LIST, request, { signal })
    .then((res) => res);
};

export const updateOrder = (
  request: UpdateOrderRequest,
  signal?: AbortSignal
): Promise<IOrder> => {
  const url = KEYS.ORDER_DETAIL.replace(":id", request.id);
  return httpInstance
    .patch<IOrder>(url, request, { signal })
    .then((res) => res);
};

export const deleteOrder = (
  request: DeleteOrderRequest,
  signal?: AbortSignal
): Promise<IOrder> => {
  const url = KEYS.ORDER_DETAIL.replace(":id", request.id);
  return httpInstance.delete<IOrder>(url, { signal }).then((res) => res);
};
