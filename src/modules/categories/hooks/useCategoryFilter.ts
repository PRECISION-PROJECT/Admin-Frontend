"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GetCategoryListParams } from "@/api/categories/request.dto";

const schema = z.object({
  search: z.string().optional(),
  parentId: z.string().optional(),
  isActive: z.string().optional(),
});

type Props = {
  queryParams: GetCategoryListParams;
  setQueryParams: (params: GetCategoryListParams) => void;
};

export const useCategoryFilter = ({ queryParams, setQueryParams }: Props) => {
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
      parentId: queryParams.parentId || "",
      isActive: queryParams.isActive?.toString() || "",
    });
  }, [queryParams, formMethods]);

  const onSubmit = (data: z.infer<typeof schema>) => {
    setQueryParams({
      ...queryParams,
      search: data.search || "",
      parentId: data.parentId || "",
      isActive: data.isActive ? data.isActive === "true" : undefined,
    });
  };

  return {
    formMethods,
    onSubmit,
    onClear,
  };
};
