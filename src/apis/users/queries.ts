import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";

import { IAxiosResponse } from "@/types/axios";
import {
  ActivateUserRequestParams,
  DeactivateUserRequestParams,
  GetUserListParams,
  GetUserListResponse,
  GetUserMetricResponse,
} from "./types";
import { KEYS } from "./keys";
import {
  activateUser,
  deactivateUser,
  deleteUser,
  getUserList,
  getUserMetric,
} from "./requests";
import { DeleteUserRequestParams } from "./types";

export const useGetUserList = (
  params: GetUserListParams,
  options?: Omit<UseQueryOptions<GetUserListResponse, Error>, "queryKey">
) => {
  return useQuery<GetUserListResponse, Error>({
    queryKey: [KEYS.USER_LIST, params],
    queryFn: ({ signal }) => getUserList(params, signal),
    ...options,
  });
};

export const useGetUserMetric = (
  options: Omit<UseQueryOptions<GetUserMetricResponse, Error>, "queryKey">
) => {
  return useQuery<GetUserMetricResponse, Error>({
    queryKey: [KEYS.USER_METRIC],
    queryFn: ({ signal }) => getUserMetric(signal),
    ...options,
  });
};

export const useDeactivateUserMutate = () => {
  return useMutation<string, IAxiosResponse, DeactivateUserRequestParams>({
    mutationKey: [KEYS.USER_DEACTIVATE],
    mutationFn: (data) => deactivateUser(data),
  });
};

export const useActivateUserMutate = () => {
  return useMutation<string, IAxiosResponse, ActivateUserRequestParams>({
    mutationKey: [KEYS.USER_ACTIVATE],
    mutationFn: (data) => activateUser(data),
  });
};

export const useDeleteUserMutate = () => {
  return useMutation<string, IAxiosResponse, DeleteUserRequestParams>({
    mutationKey: [KEYS.USER_DELETE],
    mutationFn: (data) => deleteUser(data),
  });
};
