import { useQuery } from "@tanstack/react-query";
import { GetCategoryListParams } from "./request.dto";
import { GetCategoryListResponse } from "./response.dto";
import { getCategoryList } from "./request";

export const useGetCategoryList = (
  params: GetCategoryListParams,
  queryParams?: Omit<
    Parameters<typeof useQuery<GetCategoryListResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["category-list", params],
    queryFn: ({ signal }) => getCategoryList(params, signal),
    ...queryParams,
  });
};
