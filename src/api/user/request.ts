import httpInstance from "../http-instance";
import {
  ActivateUserRequestParams,
  ActivateUserResponse,
  DeactivateUserRequestParams,
  GetUserListParams,
} from "./request.dto";
import { GetUserListResponse, GetUserMetricResponse } from "./response.dto";

export const getUserList = (
  params: GetUserListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetUserListResponse>("/users", { params, signal })
    .then((res) => res);
};

export const getUserMetric = (signal?: AbortSignal) => {
  return httpInstance
    .get<GetUserMetricResponse>("users/stats/overview", { signal })
    .then((res) => res);
};

export const deactivateUser = (params: DeactivateUserRequestParams) => {
  return httpInstance
    .post<ActivateUserResponse>(`users/${params.id}/deactivate`, {})
    .then((res) => res);
};

export const activateUser = (params: ActivateUserRequestParams) => {
  return httpInstance
    .post<ActivateUserResponse>(`users/${params.id}/activate`, {})
    .then((res) => res);
};
