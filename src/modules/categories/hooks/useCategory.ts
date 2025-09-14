"use client";

import { useGetCategoryList } from "@/api/categories";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useMemo } from "react";
import { z } from "zod";

const queryParamSchema = z.object({
  search: z.string().optional(),
  parentId: z.string().optional(),
  isActive: z.boolean().optional(),
  page: z.coerce.number().default(1),
  size: z.coerce.number().default(10),
  sort_by: z.string().optional(),
  order_by: z.enum(["desc", "asc"]).optional(),
  fields: z.string().optional(),
});

export const useCategory = () => {
  const { queryParams, setQueryParams } = useQueryParams({
    schema: queryParamSchema,
    defaultValues: { search: "", page: 1, size: 10 },
  });
  const { data, isLoading } = useGetCategoryList(queryParams);

  const metaData = useMemo(() => {
    return {
      totalPages: data?.totalPage ?? 0,
    };
  }, [data?.totalPage]);

  return {
    metaData,
    queryParams,
    isLoading,
    categoryData: data?.data ?? [],
    setQueryParams,
  };
};
