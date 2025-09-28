import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import {
  AddOrderRequest,
  DeleteOrderRequest,
  GetOrderListParams,
  GetOrderListResponse,
  IOrder,
  UpdateOrderRequest,
} from "./types";
import { KEYS } from "./keys";
import {
  addOrder,
  deleteOrder,
  getOrderDetail,
  getOrderList,
  updateOrder,
} from "./requests";

export const useGetOrderList = (
  params: GetOrderListParams,
  options?: Omit<UseQueryOptions<GetOrderListResponse, Error>, "queryKey">
) => {
  return useQuery<GetOrderListResponse, Error>({
    queryKey: [KEYS.ORDER_LIST, params],
    queryFn: ({ signal }) => getOrderList(params, signal),
    ...options,
  });
};

export const useGetOrderDetail = (
  id: string,
  options?: Omit<UseQueryOptions<IOrder, Error>, "queryKey">
) => {
  return useQuery<IOrder, Error>({
    queryKey: [KEYS.ORDER_DETAIL, id],
    queryFn: ({ signal }) => getOrderDetail(id, signal),
    ...options,
  });
};

export const useAddOrderMutation = () => {
  return useMutation<IOrder, Error, AddOrderRequest>({
    mutationFn: (request) => addOrder(request),
  });
};

export const useUpdateOrderMutation = () => {
  return useMutation<IOrder, Error, UpdateOrderRequest>({
    mutationFn: (request) => updateOrder(request),
  });
};

export const useDeleteOrderMutation = () => {
  return useMutation<IOrder, Error, DeleteOrderRequest>({
    mutationFn: (request) => deleteOrder(request),
  });
};
