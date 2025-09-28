import { request } from "../axios";
import httpInstance from "../http-instance";
import { KEYS } from "./keys";
import {
  CreateAppointmentRequest,
  DeleteAppointmentRequest,
  GetAppointmentListParams,
  GetAppointmentListResponse,
  GetMyAppointmentListParams,
  GetMyAppointmentListResponse,
  UpdateAppointmentRequest,
} from "./types";

export const getAppointmentList = async (
  params: GetAppointmentListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetAppointmentListResponse>(KEYS.APPOINTMENTS_LIST, { params, signal })
    .then((res) => res);
};

export const getMyAppointmentList = async (
  params: GetMyAppointmentListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetMyAppointmentListResponse>(KEYS.MY_APPOINTMENTS, { params, signal })
    .then((res) => res);
};

export const createAppointment = async (params: CreateAppointmentRequest) => {
  return httpInstance
    .post<string>(KEYS.APPOINTMENTS_CREATE, params)
    .then((res) => res);
};

export const updateAppointment = async (params: UpdateAppointmentRequest) => {
  const url = KEYS.APPOINTMENTS_DETAIL.replace(":id", params.id);
  return httpInstance.patch<string>(url, params).then((res) => res);
};

export const deleteAppointment = async (params: DeleteAppointmentRequest) => {
  const url = KEYS.APPOINTMENTS_DETAIL.replace(":id", params.id);
  return httpInstance.delete<string>(url).then((res) => res);
};
