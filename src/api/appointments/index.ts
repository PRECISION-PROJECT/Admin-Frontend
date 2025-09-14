import { useQuery } from "@tanstack/react-query";
import { GetAppointmentListParams } from "./request.dto";
import { GetAppointmentListResponse } from "./response.dto";
import { getAppointmentList } from "./request";

export const useGetAppointmentList = (
  params: GetAppointmentListParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetAppointmentListResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["appointment-list", params],
    queryFn: ({ signal }) => getAppointmentList(params, signal),
    ...queryParams,
  });
};
