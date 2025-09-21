import httpInstance from "../http-instance";
import {
  GetDashboardOverviewParams,
  GetOrderAnalyticsParams,
  GetRevenueReportParams,
} from "./request.dto";
import {
  GetDashboardOverviewResponse,
  GetOrderAnalyticsResponse,
  GetProductAnalyticsResponse,
  GetRevenueReportResponse,
  GetUserAnalyticsResponse,
} from "./response.dto";

export const getRevenueReport = (params?: GetRevenueReportParams, signal?: AbortSignal) => {
  const searchParams = new URLSearchParams();
  if (params?.startDate) searchParams.append('startDate', params.startDate);
  if (params?.endDate) searchParams.append('endDate', params.endDate);

  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';

  return httpInstance
    .get<GetRevenueReportResponse>(`/reports/revenue${query}`, { signal })
    .then((res) => res);
};

export const getOrderAnalytics = (params?: GetOrderAnalyticsParams, signal?: AbortSignal) => {
  const searchParams = new URLSearchParams();
  if (params?.startDate) searchParams.append('startDate', params.startDate);
  if (params?.endDate) searchParams.append('endDate', params.endDate);

  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';

  return httpInstance
    .get<GetOrderAnalyticsResponse>(`/reports/orders${query}`, { signal })
    .then((res) => res);
};

export const getUserAnalytics = (signal?: AbortSignal) => {
  return httpInstance
    .get<GetUserAnalyticsResponse>("/reports/users", { signal })
    .then((res) => res);
};

export const getProductAnalytics = (signal?: AbortSignal) => {
  return httpInstance
    .get<GetProductAnalyticsResponse>("/reports/products", { signal })
    .then((res) => res);
};

export const getDashboardOverview = (params?: GetDashboardOverviewParams, signal?: AbortSignal) => {
  const searchParams = new URLSearchParams();
  if (params?.period) searchParams.append('period', params.period);

  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';

  return httpInstance
    .get<GetDashboardOverviewResponse>(`/reports/dashboard${query}`, { signal })
    .then((res) => res);
};