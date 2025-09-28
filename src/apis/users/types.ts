import {
  CommonRequestType,
  IPaginatedResponseType,
} from "@/types";
import { IUserResponse } from "../auths";

export type GetUserListParams = {
  startDate?: string;
  endDate?: string;
  status?: string;
} & CommonRequestType;

export type DeactivateUserRequestParams = {
  id: string;
};

export type ActivateUserRequestParams = {
  id: string;
};

export type DeleteUserRequestParams = {
  id: string;
};

export type ActivateUserResponse = DeactivateUserRequestParams;

export interface UsersByRole {
  ADMIN: number;
  ADMIN_STAFF: number;
  USER: number;
}

export interface UsersByStatus {
  active: number;
  inactive: number;
}

export type GetUserMetricResponse = {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  adminUsers: number;
  staffUsers: number;
  regularUsers: number;
  usersByRole: UsersByRole;
  usersByStatus: UsersByStatus;
};

export type GetUserListResponse = IPaginatedResponseType<IUserResponse[]>;
