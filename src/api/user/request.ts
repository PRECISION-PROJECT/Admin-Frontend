import httpInstance from "../http-instance";
import { GetUserListParams } from "./request.dto";
import { GetUserListResponse } from "./response.dto";

export const getUserList = (
  params: GetUserListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetUserListResponse>("/users", { params, signal })
    .then((res) => res);
};
