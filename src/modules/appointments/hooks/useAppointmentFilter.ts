"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GetAppointmentListParams } from "@/api/appointments/request.dto";

const schema = z.object({
  search: z.string().optional(),
  userId: z.string().optional(),
});

type Props = {
  queryParams: GetAppointmentListParams;
  setQueryParams: (params: GetAppointmentListParams) => void;
};

export const useAppointmentFilter = ({ queryParams, setQueryParams }: Props) => {
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
      userId: queryParams.userId || "",
    });
  }, [queryParams, formMethods]);

  const onSubmit = (data: z.infer<typeof schema>) => {
    setQueryParams({
      ...queryParams,
      search: data.search || "",
      userId: data.userId || "",
    });
  };

  return {
    formMethods,
    onSubmit,
    onClear,
  };
};
