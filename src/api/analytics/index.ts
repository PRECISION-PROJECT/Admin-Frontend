"use client"
import { useQuery } from "@tanstack/react-query";
import {
  getAnalyticsChannels,
  getAnalyticsDashboard,
  getAnalyticsDevices,
  getAnalyticsPages,
  getAnalyticsRealTime,
  getAnalyticsVisitors,
} from "./request";
import {
  GetAnalyticsChannelsParams,
  GetAnalyticsDashboardParams,
  GetAnalyticsDevicesParams,
  GetAnalyticsPagesParams,
  GetAnalyticsVisitorsParams,
} from "./request.dto";
import {
  GetAnalyticsChannelsResponse,
  GetAnalyticsDashboardResponse,
  GetAnalyticsDevicesResponse,
  GetAnalyticsPagesResponse,
  GetAnalyticsRealTimeResponse,
  GetAnalyticsVisitorsResponse,
} from "./response.dto";

export const useAnalyticsDashboardQuery = (
  params?: GetAnalyticsDashboardParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetAnalyticsDashboardResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["analytics-dashboard", params],
    queryFn: ({ signal }) => getAnalyticsDashboard(params, signal),
    ...queryParams,
  });
};

export const useAnalyticsVisitorsQuery = (
  params?: GetAnalyticsVisitorsParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetAnalyticsVisitorsResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["analytics-visitors", params],
    queryFn: ({ signal }) => getAnalyticsVisitors(params, signal),
    ...queryParams,
  });
};

export const useAnalyticsChannelsQuery = (
  params?: GetAnalyticsChannelsParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetAnalyticsChannelsResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["analytics-channels", params],
    queryFn: ({ signal }) => getAnalyticsChannels(params, signal),
    ...queryParams,
  });
};

export const useAnalyticsPagesQuery = (
  params?: GetAnalyticsPagesParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetAnalyticsPagesResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["analytics-pages", params],
    queryFn: ({ signal }) => getAnalyticsPages(params, signal),
    ...queryParams,
  });
};

export const useAnalyticsRealTimeQuery = (
  queryParams?: Omit<
    Parameters<typeof useQuery<GetAnalyticsRealTimeResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["analytics-real-time"],
    queryFn: ({ signal }) => getAnalyticsRealTime(signal),
    refetchInterval: 30000, // Refetch every 30 seconds for real-time data
    ...queryParams,
  });
};

export const useAnalyticsDevicesQuery = (
  params?: GetAnalyticsDevicesParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetAnalyticsDevicesResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["analytics-devices", params],
    queryFn: ({ signal }) => getAnalyticsDevices(params, signal),
    ...queryParams,
  });
};