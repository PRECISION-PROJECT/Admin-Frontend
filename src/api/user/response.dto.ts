import { BaseResponseType, PaginatedResponseType } from "@/types";
import { GetWhoAmIResponse } from "../auth/response.dto";
export interface UsersByRole {
  ADMIN: number;
  ADMIN_STAFF: number;
  USER: number;
}

export interface UsersByStatus {
  active: number;
  inactive: number;
}

export type GetUserMetricResponse = BaseResponseType<{
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  adminUsers: number;
  staffUsers: number;
  regularUsers: number;
  usersByRole: UsersByRole;
  usersByStatus: UsersByStatus;
}>;

export type GetUserListResponse = PaginatedResponseType<GetWhoAmIResponse>;
