"use client";

import { useGetCategoryList } from "@/apis/categories";
import { PAGE_KEY, PER_PAGE_KEY, SORT_KEY } from "@/hooks/use-data-table";
import { useQueryStates } from "nuqs";
import { parseAsInteger, parseAsString } from "nuqs/server";

export const useCategoryListTable = () => {
  const [query] = useQueryStates({
    [PAGE_KEY]: parseAsInteger.withDefault(1),
    [PER_PAGE_KEY]: parseAsInteger.withDefault(10),
    [SORT_KEY]: parseAsString.withDefault(""),
    search: parseAsString.withDefault(""),
    isActive: parseAsString.withDefault(""),
  });

  const { data, isLoading } = useGetCategoryList(query, {
    placeholderData: (prev) => prev,
  });

  const categoryList = data?.data ?? [];
  const pageCount = data?.totalPage ?? 0;

  return {
    categoryList,
    pageCount,
    isLoading,
  };
};
