import { useQuery } from "@tanstack/react-query";
import {
  getRevenueReport,
  getOrderAnalytics,
  getUserAnalytics,
  getProductAnalytics,
  getDashboardOverview,
} from "./request";
import {
  GetRevenueReportParams,
  GetOrderAnalyticsParams,
  GetDashboardOverviewParams,
} from "./request.dto";
import {
  GetRevenueReportResponse,
  GetOrderAnalyticsResponse,
  GetUserAnalyticsResponse,
  GetProductAnalyticsResponse,
  GetDashboardOverviewResponse,
} from "./response.dto";

export const useRevenueReportQuery = (
  params?: GetRevenueReportParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetRevenueReportResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["reports-revenue", params],
    queryFn: ({ signal }) => getRevenueReport(params, signal),
    ...queryParams,
  });
};

export const useOrderAnalyticsQuery = (
  params?: GetOrderAnalyticsParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetOrderAnalyticsResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["reports-orders", params],
    queryFn: ({ signal }) => getOrderAnalytics(params, signal),
    ...queryParams,
  });
};

export const useUserAnalyticsQuery = (
  queryParams?: Omit<
    Parameters<typeof useQuery<GetUserAnalyticsResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["reports-users"],
    queryFn: ({ signal }) => getUserAnalytics(signal),
    ...queryParams,
  });
};

export const useProductAnalyticsQuery = (
  queryParams?: Omit<
    Parameters<typeof useQuery<GetProductAnalyticsResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["reports-products"],
    queryFn: ({ signal }) => getProductAnalytics(signal),
    ...queryParams,
  });
};

export const useDashboardOverviewQuery = (
  params?: GetDashboardOverviewParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetDashboardOverviewResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["reports-dashboard", params],
    queryFn: ({ signal }) => getDashboardOverview(params, signal),
    ...queryParams,
  });
};