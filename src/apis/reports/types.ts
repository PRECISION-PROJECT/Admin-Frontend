import { IProduct } from "../products";

export type BaseDateParams = {
  startDate?: string;
  endDate?: string;
};

export type GetReportRevenueParams = BaseDateParams & {};

export type GetReportOrdersParams = BaseDateParams & {};

export type GetReportProductsParams = BaseDateParams & {};

export type GetReportUsersParams = BaseDateParams & {};

export type GetReportDashboardParams = BaseDateParams & {
  period?: string;
};

export type IRevenue = {
  totalRevenue: string;
  monthlyRevenue: string;
  weeklyRevenue: string;
  dailyRevenue: number;
  averageOrderValue: number;
  totalOrders: number;
};

export type IOrders = {
  totalOrders: number;
  completedOrders: number;
  pendingOrders: number;
  cancelledOrders: number;
  averageOrderValue: number;
  ordersByMonth: IOrdersByMonth[];
};

export type IOrdersByMonth = {
  month: string;
  count: number;
  revenue: string;
};

export type IUsers = {
  totalUsers: number;
  newUsersThisMonth: number;
  activeUsers: number;
  usersByRole: IUsersByRole;
};

export type IUsersByRole = {
  ADMIN: number;
  ADMIN_STAFF: number;
  USER: number;
};

export type IProducts = {
  totalProducts: number;
  topSellingProducts: IProduct[];
  lowStockProducts: IProduct[];
};

export type GetReportDashboardResponse = {
  period: string;
  periodStart: string;
  periodEnd: string;
  revenue: IRevenue;
  orders: IOrders;
  users: IUsers;
  products: IProducts;
  generatedAt: string;
};

export type GetReportProductsResponse = IProducts;

export type GetReportUsersResponse = IUsers;

export type GetReportOrdersResponse = IOrders;

export type GetReportRevenueResponse = IRevenue;
