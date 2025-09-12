"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GetUserListParams } from "@/api/user/request.dto";
import { initialQueryParams } from "./useUserAccountList";
import dayjs from "dayjs";
const schema = z.object({
  search: z.string().optional(),
  status: z.string().optional(),
  startDate: z.date().optional().nullable(),
  endDate: z.date().optional().nullable(),
});

type Props = {
  queryParams: GetUserListParams;
  setQueryParams: (params: GetUserListParams) => void;
};

export const useUserAccountFilter = ({
  queryParams,
  setQueryParams,
}: Props) => {
  const formMethods = useForm({
    resolver: zodResolver(schema),
  });

  const onClear = useCallback(() => {
    alert('123')
    formMethods.reset({});
    setQueryParams(initialQueryParams);
  }, [formMethods, setQueryParams]);

  useEffect(() => {
    formMethods.reset({
      status: queryParams.status || "",
      search: queryParams.search || "",
      startDate: queryParams.startDate
        ? dayjs(queryParams.startDate).toDate()
        : null,
      endDate: queryParams.endDate ? dayjs(queryParams.endDate).toDate() : null,
    });
  }, [queryParams, formMethods]);

  const onSubmit = (data: z.infer<typeof schema>) => {
    setQueryParams({
      ...initialQueryParams,
      status: data.status || "",
      search: data.search || "",
      startDate: data.startDate
        ? dayjs(data.startDate).format("YYYY-MM-DD")
        : "",
      endDate: data.endDate ? dayjs(data.endDate).format("YYYY-MM-DD") : "",
    });
  };

  return {
    formMethods,
    onSubmit,
    onClear,
  };
};
