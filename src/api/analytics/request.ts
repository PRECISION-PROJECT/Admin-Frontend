import httpInstance from "../http-instance";
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

export const getAnalyticsDashboard = (params?: GetAnalyticsDashboardParams, signal?: AbortSignal) => {
  const searchParams = new URLSearchParams();
  if (params?.startDate) searchParams.append('startDate', params.startDate);
  if (params?.endDate) searchParams.append('endDate', params.endDate);

  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';

  return httpInstance
    .get<GetAnalyticsDashboardResponse>(`/analytics/dashboard${query}`, { signal })
    .then((res) => res);
};

export const getAnalyticsVisitors = (params?: GetAnalyticsVisitorsParams, signal?: AbortSignal) => {
  const searchParams = new URLSearchParams();
  if (params?.startDate) searchParams.append('startDate', params.startDate);
  if (params?.endDate) searchParams.append('endDate', params.endDate);

  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';

  return httpInstance
    .get<GetAnalyticsVisitorsResponse>(`/analytics/visitors${query}`, { signal })
    .then((res) => res);
};

export const getAnalyticsChannels = (params?: GetAnalyticsChannelsParams, signal?: AbortSignal) => {
  const searchParams = new URLSearchParams();
  if (params?.startDate) searchParams.append('startDate', params.startDate);
  if (params?.endDate) searchParams.append('endDate', params.endDate);

  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';

  return httpInstance
    .get<GetAnalyticsChannelsResponse>(`/analytics/channels${query}`, { signal })
    .then((res) => res);
};

export const getAnalyticsPages = (params?: GetAnalyticsPagesParams, signal?: AbortSignal) => {
  const searchParams = new URLSearchParams();
  if (params?.startDate) searchParams.append('startDate', params.startDate);
  if (params?.endDate) searchParams.append('endDate', params.endDate);

  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';

  return httpInstance
    .get<GetAnalyticsPagesResponse>(`/analytics/pages${query}`, { signal })
    .then((res) => res);
};

export const getAnalyticsRealTime = (signal?: AbortSignal) => {
  return httpInstance
    .get<GetAnalyticsRealTimeResponse>("/analytics/real-time", { signal })
    .then((res) => res);
};

export const getAnalyticsDevices = (params?: GetAnalyticsDevicesParams, signal?: AbortSignal) => {
  const searchParams = new URLSearchParams();
  if (params?.startDate) searchParams.append('startDate', params.startDate);
  if (params?.endDate) searchParams.append('endDate', params.endDate);

  const query = searchParams.toString() ? `?${searchParams.toString()}` : '';

  return httpInstance
    .get<GetAnalyticsDevicesResponse>(`/analytics/devices${query}`, { signal })
    .then((res) => res);
};