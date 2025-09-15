"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GetProductLowStockListParams } from "@/api/products-low-stock/request.dto";

const schema = z.object({
  search: z.string().optional(),
});

type Props = {
  queryParams: GetProductLowStockListParams;
  setQueryParams: (params: GetProductLowStockListParams) => void;
};

export const useProductLowStockFilter = ({ queryParams, setQueryParams }: Props) => {
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
    });
  }, [queryParams, formMethods]);

  const onSubmit = (data: z.infer<typeof schema>) => {
    setQueryParams({
      ...queryParams,
      search: data.search || "",
    });
  };

  return {
    formMethods,
    onSubmit,
    onClear,
  };
};
