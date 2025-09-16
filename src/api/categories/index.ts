import { useQuery } from "@tanstack/react-query";
import { GetCategoryListParams } from "./request.dto";
import { GetCategoryListResponse, Category } from "./response.dto";
import { getCategoryList, getAllCategories } from "./request";

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

export const useGetAllCategories = (
  queryParams?: Omit<
    Parameters<typeof useQuery<Category[]>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["all-categories"],
    queryFn: ({ signal }) => getAllCategories(signal),
    ...queryParams,
  });
};
