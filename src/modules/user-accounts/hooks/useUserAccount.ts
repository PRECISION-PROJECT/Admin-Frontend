"use client";

import { useGetUserList } from "@/api/user";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useMemo } from "react";
import { z } from "zod";

const queryParamSchema = z.object({
  search: z.string().optional(),
  status: z.string().optional(),
  page: z.coerce.number().default(0),
  size: z.coerce.number().default(10),
  sort_by: z.string().optional(),
  order_by: z.enum(["desc", "asc"]).optional(),
  fields: z.string().optional(),
});

export const useUserAccount = () => {
  const { queryParams, setQueryParams } = useQueryParams({
    schema: queryParamSchema,
    defaultValues: { search: "", page: 1, size: 10 },
  });
  const { data, isLoading } = useGetUserList(queryParams);

  const metaData = useMemo(() => {
    return {
      totalPages: data?.totalPage ?? 0,
    }
  }, [data?.totalPage])

  return {
    metaData,
    queryParams,
    isLoading,
    userData: data?.data ?? [],
    setQueryParams,
  };
};
