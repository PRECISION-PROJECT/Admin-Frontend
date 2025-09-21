import { BaseResponseType } from "@/types/common";

export type VisitorMetricsDto = {
  uniqueVisitors: string;
  uniqueVisitorsChange: string;
  totalPageviews: string;
  pageviewsChange: string;
  bounceRate: string;
  bounceRateChange: string;
  visitDuration: string;
  visitDurationChange: string;
};

export type ChannelDto = {
  source: string;
  visitors: number;
};

export type PageDto = {
  source: string;
  pageviews: number;
};

export type ActiveUsersDto = {
  liveVisitors: number;
  avgDaily: number;
  avgWeekly: string;
  avgMonthly: string;
};

export type AnalyticsChartDataDto = {
  date: string;
  count: number;
};

export type AcquisitionChannelDto = {
  period: string;
  direct: number;
  referral: number;
  organic: number;
  social: number;
};

export type DeviceBreakdownDto = {
  device: string;
  percentage: number;
};

export type DashboardAnalyticsDto = {
  visitorMetrics: VisitorMetricsDto;
  topChannels: ChannelDto[];
  topPages: PageDto[];
  activeUsers: ActiveUsersDto;
  visitorAnalytics: AnalyticsChartDataDto[];
  acquisitionChannels: AcquisitionChannelDto[];
  deviceBreakdown: DeviceBreakdownDto[];
};

export type GetAnalyticsDashboardResponse = DashboardAnalyticsDto;
export type GetAnalyticsVisitorsResponse = BaseResponseType<VisitorMetricsDto>;
export type GetAnalyticsChannelsResponse = BaseResponseType<ChannelDto[]>;
export type GetAnalyticsPagesResponse = BaseResponseType<PageDto[]>;
export type GetAnalyticsRealTimeResponse = BaseResponseType<ActiveUsersDto>;
export type GetAnalyticsDevicesResponse = BaseResponseType<DeviceBreakdownDto[]>;