import httpInstance from "../http-instance";
import { KEYS } from "./keys";
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

export const getReportProducts = (
  params: GetReportProductsParams,
  signal?: AbortSignal
): Promise<GetReportProductsResponse> => {
  return httpInstance
    .get<GetReportProductsResponse>(KEYS.REPORTS_PRODUCTS, { params, signal })
    .then((res) => res);
};

export const getReportUsers = (
  params: GetReportUsersParams,
  signal?: AbortSignal
): Promise<GetReportUsersResponse> => {
  return httpInstance
    .get<GetReportUsersResponse>(KEYS.REPORTS_USERS, { params, signal })
    .then((res) => res);
};

export const getReportOrders = (
  params: GetReportOrdersParams,
  signal?: AbortSignal
): Promise<GetReportOrdersResponse> => {
  return httpInstance
    .get<GetReportOrdersResponse>(KEYS.REPORTS_ORDERS, { params, signal })
    .then((res) => res);
};

export const getReportRevenue = (
  params: GetReportRevenueParams,
  signal?: AbortSignal
): Promise<GetReportRevenueResponse> => {
  return httpInstance
    .get<GetReportRevenueResponse>(KEYS.REPORTS_REVENUE, { params, signal })
    .then((res) => res);
};

export const getReportDashboard = (
  params: GetReportDashboardParams,
  signal?: AbortSignal
): Promise<GetReportDashboardResponse> => {
  return httpInstance
    .get<GetReportDashboardResponse>(KEYS.REPORTS_DASHBOARD, { params, signal })
    .then((res) => res);
};
