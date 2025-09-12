import { useQuery } from "@tanstack/react-query";
import { getUserList } from "./request";
import { GetUserListParams } from "./request.dto";
import { GetUserListResponse } from "./response.dto";

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
