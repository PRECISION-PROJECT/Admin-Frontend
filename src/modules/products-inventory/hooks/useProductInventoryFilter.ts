"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GetProductInventoryListParams } from "@/api/products-inventory/request.dto";

const schema = z.object({
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
});

type Props = {
  queryParams: GetProductInventoryListParams;
  setQueryParams: (params: GetProductInventoryListParams) => void;
};

export const useProductInventoryFilter = ({ queryParams, setQueryParams }: Props) => {
  const formMethods = useForm({
    resolver: zodResolver(schema),
  });

  const onClear = useCallback(() => {
    formMethods.reset({});
    setQueryParams({});
  }, [formMethods, setQueryParams]);

  useEffect(() => {
    formMethods.reset({
      search: queryParams.search || "",
      categoryId: queryParams.categoryId || "",
      types: queryParams.types || [],
      status: queryParams.status || "",
      minPrice: queryParams.minPrice || undefined,
      maxPrice: queryParams.maxPrice || undefined,
      material: queryParams.material || "",
      color: queryParams.color || "",
      finish: queryParams.finish || "",
      sortBy: queryParams.sortBy || "",
      sortOrder: queryParams.sortOrder || "",
    });
  }, [queryParams, formMethods]);

  const onSubmit = (data: z.infer<typeof schema>) => {
    setQueryParams({
      ...queryParams,
      search: data.search || "",
      categoryId: data.categoryId || "",
      types: data.types || [],
      status: data.status || "",
      minPrice: data.minPrice || undefined,
      maxPrice: data.maxPrice || undefined,
      material: data.material || "",
      color: data.color || "",
      finish: data.finish || "",
      sortBy: data.sortBy || "",
      sortOrder: data.sortOrder || "",
    });
  };

  return {
    formMethods,
    onSubmit,
    onClear,
  };
};
