import { CommonRequestType } from "@/types";

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

export type ActivateUserResponse = DeactivateUserRequestParams;
