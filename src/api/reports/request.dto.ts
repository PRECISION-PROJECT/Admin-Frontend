export type DateRangeParams = {
  startDate?: string;
  endDate?: string;
};

export type PeriodParams = {
  period?: '30d' | '90d' | '1y';
};

export type GetRevenueReportParams = DateRangeParams;
export type GetOrderAnalyticsParams = DateRangeParams;
export type GetDashboardOverviewParams = PeriodParams;