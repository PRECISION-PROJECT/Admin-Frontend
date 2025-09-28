import httpInstance from "../http-instance";
import { KEYS } from "./keys";

import {
  ActivateUserRequestParams,
  DeactivateUserRequestParams,
  DeleteUserRequestParams,
  GetUserListParams,
  GetUserListResponse,
  GetUserMetricResponse,
} from "./types";

export const getUserList = (
  params: GetUserListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetUserListResponse>(KEYS.USER_LIST, { params, signal })
    .then((res) => res);
};

export const getUserMetric = (signal?: AbortSignal) => {
  return httpInstance
    .get<GetUserMetricResponse>(KEYS.USER_METRIC, { signal })
    .then((res) => res);
};

export const deactivateUser = (params: DeactivateUserRequestParams) => {
  const url = KEYS.USER_DEACTIVATE.replace(":id", params.id);
  return httpInstance.post<string>(url, {}).then((res) => res);
};

export const activateUser = (params: ActivateUserRequestParams) => {
  const url = KEYS.USER_ACTIVATE.replace(":id", params.id);
  return httpInstance.post<string>(url, {}).then((res) => res);
};

export const deleteUser = (params: DeleteUserRequestParams) => {
  const url = KEYS.USER_DELETE.replace(":id", params.id);
  return httpInstance.delete<string>(url).then((res) => res);
};