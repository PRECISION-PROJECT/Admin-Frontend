import { BaseResponseType } from "@/types";

export type RevenueMetrics = {
  totalRevenue: number;
  monthlyRevenue: number;
  weeklyRevenue: number;
  dailyRevenue: number;
  averageOrderValue: number;
  totalOrders: number;
};

export type OrderAnalytics = {
  totalOrders: number;
  completedOrders: number;
  pendingOrders: number;
  cancelledOrders: number;
  averageOrderValue: number;
  ordersByMonth: {
    month: string;
    count: number;
    revenue: number;
  }[];
};

export type UserAnalytics = {
  totalUsers: number;
  newUsersThisMonth: number;
  activeUsers: number;
  usersByRole: {
    [key: string]: number;
  };
};

export type ProductAnalytics = {
  totalProducts: number;
  topSellingProducts: {
    id: string;
    name: string;
    orderCount: number;
    revenue: number;
  }[];
  lowStockProducts: {
    id: string;
    name: string;
    stock: number;
  }[];
};

export type DashboardOverview = {
  period: string;
  periodStart: string;
  periodEnd: string;
  revenue: RevenueMetrics;
  orders: OrderAnalytics;
  users: UserAnalytics;
  products: ProductAnalytics;
  generatedAt: string;
};

export type GetRevenueReportResponse = BaseResponseType<RevenueMetrics>;
export type GetOrderAnalyticsResponse = BaseResponseType<OrderAnalytics>;
export type GetUserAnalyticsResponse = BaseResponseType<UserAnalytics>;
export type GetProductAnalyticsResponse = BaseResponseType<ProductAnalytics>;
export type GetDashboardOverviewResponse = BaseResponseType<DashboardOverview>;