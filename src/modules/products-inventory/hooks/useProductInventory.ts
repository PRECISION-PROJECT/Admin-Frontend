"use client";

import { useGetProductInventoryList } from "@/api/products-inventory";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useMemo } from "react";
import { z } from "zod";

const queryParamSchema = z.object({
  search: z.string().optional(),
  categoryId: z.string().optional(),
  types: z.array(z.string()).optional(),
  status: z.string().optional(),
  isFeatured: z.boolean().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  material: z.string().optional(),
  color: z.string().optional(),
  finish: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.string().optional(),
  includeCategory: z.boolean().optional(),
  page: z.coerce.number().default(1),
  size: z.coerce.number().default(10),
  sort_by: z.string().optional(),
  order_by: z.enum(["desc", "asc"]).optional(),
  fields: z.string().optional(),
});

export const useProductInventory = () => {
  const { queryParams, setQueryParams } = useQueryParams({
    schema: queryParamSchema,
    defaultValues: { search: "", page: 1, size: 10 },
  });
  const { data, isLoading } = useGetProductInventoryList(queryParams);

  const metaData = useMemo(() => {
    return {
      totalPages: data?.totalPage ?? 0,
    };
  }, [data?.totalPage]);

  return {
    metaData,
    queryParams,
    isLoading,
    productInventoryData: data?.data ?? [],
    setQueryParams,
  };
};
