import { IAxiosResponse } from "@/types/axios";
import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { KEYS } from "./keys";
import {
  createAppointment,
  deleteAppointment,
  getAppointmentList,
  getMyAppointmentList,
  updateAppointment,
} from "./requests";
import {
  CreateAppointmentRequest,
  DeleteAppointmentRequest,
  GetAppointmentListParams,
  GetAppointmentListResponse,
  GetMyAppointmentListParams,
  GetMyAppointmentListResponse,
  UpdateAppointmentRequest,
} from "./types";

export const useGetAppointmentList = (
  params: GetAppointmentListParams,
  options?: Omit<UseQueryOptions<GetAppointmentListResponse, Error>, "queryKey">
) => {
  return useQuery<GetAppointmentListResponse, Error>({
    queryKey: [KEYS.APPOINTMENTS_LIST, params],
    queryFn: ({ signal }) => getAppointmentList(params, signal),
    ...options,
  });
};

export const useGetMyAppointmentList = (
  params: GetMyAppointmentListParams,
  options?: Omit<
    UseQueryOptions<GetMyAppointmentListResponse, Error>,
    "queryKey"
  >
) => {
  return useQuery<GetMyAppointmentListResponse, Error>({
    queryKey: [KEYS.MY_APPOINTMENTS, params],
    queryFn: ({ signal }) => getMyAppointmentList(params, signal),
    ...options,
  });
};

export const useCreateAppointmentMutation = () => {
  return useMutation<string, IAxiosResponse, CreateAppointmentRequest>({
    mutationKey: [KEYS.APPOINTMENTS_CREATE],
    mutationFn: (data) => createAppointment(data),
  });
};

export const useUpdateAppointmentMutation = () => {
  return useMutation<string, IAxiosResponse, UpdateAppointmentRequest>({
    mutationKey: [KEYS.APPOINTMENTS_DETAIL],
    mutationFn: (data) => updateAppointment(data),
  });
};

export const useDeleteAppointmentMutation = () => {
  return useMutation<string, IAxiosResponse, DeleteAppointmentRequest>({
    mutationKey: [KEYS.APPOINTMENTS_DETAIL],
    mutationFn: (data) => deleteAppointment(data),
  });
};
