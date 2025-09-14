import httpInstance from "../http-instance";
import { GetAppointmentListParams } from "./request.dto";
import { GetAppointmentListResponse } from "./response.dto";

export const getAppointmentList = (
  params: GetAppointmentListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetAppointmentListResponse>("/appointments", { params, signal })
    .then((res) => res);
};
