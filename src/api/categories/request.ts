import httpInstance from "../http-instance";
import { GetCategoryListParams } from "./request.dto";
import { GetCategoryListResponse } from "./response.dto";

export const getCategoryList = (
  params: GetCategoryListParams,
  signal?: AbortSignal
) => {
  return httpInstance
    .get<GetCategoryListResponse>("/categories", { params, signal })
    .then((res) => res);
};
