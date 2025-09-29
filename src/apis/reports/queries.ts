import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { KEYS } from "./keys";
import {
  getReportDashboard,
  getReportOrders,
  getReportProducts,
  getReportRevenue,
  getReportUsers,
} from "./requests";
import {
  GetReportDashboardParams,
  GetReportDashboardResponse,
  GetReportOrdersParams,
  GetReportOrdersResponse,
  GetReportProductsParams,
  GetReportProductsResponse,
  GetReportRevenueParams,
  GetReportRevenueResponse,
  GetReportUsersParams,
  GetReportUsersResponse,
} from "./types";

export const useGetReportProducts = (
  params: GetReportProductsParams,
  options?: Omit<UseQueryOptions<GetReportProductsResponse, Error>, "queryKey">
) => {
  return useQuery<GetReportProductsResponse, Error>({
    queryKey: [KEYS.REPORTS_PRODUCTS, params],
    queryFn: ({ signal }) => getReportProducts(params, signal),
    ...options,
  });
};

export const useGetReportUsers = (
  params: GetReportUsersParams,
  options?: Omit<UseQueryOptions<GetReportUsersResponse, Error>, "queryKey">
) => {
  return useQuery<GetReportUsersResponse, Error>({
    queryKey: [KEYS.REPORTS_USERS, params],
    queryFn: ({ signal }) => getReportUsers(params, signal),
    ...options,
  });
};

export const useGetReportOrders = (
  params: GetReportOrdersParams,
  options?: Omit<UseQueryOptions<GetReportOrdersResponse, Error>, "queryKey">
) => {
  return useQuery<GetReportOrdersResponse, Error>({
    queryKey: [KEYS.REPORTS_ORDERS, params],
    queryFn: ({ signal }) => getReportOrders(params, signal),
    ...options,
  });
};

export const useGetReportRevenue = (
  params: GetReportRevenueParams,
  options?: Omit<UseQueryOptions<GetReportRevenueResponse, Error>, "queryKey">
) => {
  return useQuery<GetReportRevenueResponse, Error>({
    queryKey: [KEYS.REPORTS_REVENUE, params],
    queryFn: ({ signal }) => getReportRevenue(params, signal),
    ...options,
  });
};

export const useGetReportDashboard = (
  params: GetReportDashboardParams,
  options?: Omit<UseQueryOptions<GetReportDashboardResponse, Error>, "queryKey">
) => {
  return useQuery<GetReportDashboardResponse, Error>({
    queryKey: [KEYS.REPORTS_DASHBOARD, params],
    queryFn: ({ signal }) => getReportDashboard(params, signal),
    ...options,
  });
};
