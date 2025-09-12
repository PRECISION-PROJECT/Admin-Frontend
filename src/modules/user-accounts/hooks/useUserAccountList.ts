"use client";

import { useGetUserList } from "@/api/user";
import { useQueryParams } from "@/hooks/useQueryParams";
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

export const initialQueryParams = {
  search: "",
  page: 1,
  size: 10,
}

export const useUserAccountList = () => {
  const { queryParams } = useQueryParams({
    schema: queryParamSchema,
    defaultValues: initialQueryParams,
  });
  const { data, isLoading } = useGetUserList(queryParams);

  return {
    isLoading,
    userData: data?.data ?? [],
  };
};
