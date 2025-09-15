"use client";

import { useGetProductFeatureList } from "@/api/products";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useMemo } from "react";
import { z } from "zod";

const queryParamSchema = z.object({
  search: z.string().optional(),
  categoryId: z.string().optional(),
  types: z.array(z.string()).optional(),
  status: z.string().optional(),
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

export const useProductFeature = () => {
  const { queryParams, setQueryParams } = useQueryParams({
    schema: queryParamSchema,
    defaultValues: { search: "", page: 1, size: 10 },
  });
  
  const { data, isLoading } = useGetProductFeatureList(queryParams);

  const metaData = useMemo(() => {
    return {
      totalPages: data?.totalPage ?? 0,
    };
  }, [data?.totalPage]);

  return {
    metaData,
    queryParams,
    isLoading,
    productFeatureData: data?.data ?? [],
    setQueryParams,
  };
};
