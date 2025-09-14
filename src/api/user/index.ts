import { useMutation, useQuery } from "@tanstack/react-query";
import {
  activateUser,
  deactivateUser,
  getUserList,
  getUserMetric,
} from "./request";
import {
  ActivateUserRequestParams,
  DeactivateUserRequestParams,
  GetUserListParams,
} from "./request.dto";
import { GetUserListResponse, GetUserMetricResponse } from "./response.dto";

export const useGetUserList = (
  params: GetUserListParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetUserListResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["user-list", params],
    queryFn: ({ signal }) => getUserList(params, signal),
    ...queryParams,
  });
};

export const useGetUserMetric = (
  queryParams?: Omit<
    Parameters<typeof useQuery<GetUserMetricResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["user-metric"],
    queryFn: ({ signal }) => getUserMetric(signal),
    ...queryParams,
  });
};

export const useActivateUserMutate = () => {
  return useMutation({
    mutationKey: ["activate-user"],
    mutationFn: (body: ActivateUserRequestParams) => activateUser(body),
  });
};

export const useDeactivateUserMutate = () => {
  return useMutation({
    mutationKey: ["deactivate-user"],
    mutationFn: (body: DeactivateUserRequestParams) => deactivateUser(body),
  });
};
