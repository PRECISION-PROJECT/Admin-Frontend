"use client";

import { PAGE_KEY, PER_PAGE_KEY, SORT_KEY } from "@/hooks/use-data-table";
import { useQueryStates } from "nuqs";

import { IAppointment, useGetAppointmentList } from "@/apis/appointments";
import { parseAsInteger, parseAsString } from "nuqs/server";
import { useCallback } from "react";
import {
  AppointmentsDialogType,
  useAppointmentsList,
} from "../contexts/appointments-list-context";

export const useAppointmentsListTable = () => {
  const { setCurrentRow, setOpen } = useAppointmentsList();

  const [query] = useQueryStates({
    [PAGE_KEY]: parseAsInteger.withDefault(1),
    [PER_PAGE_KEY]: parseAsInteger.withDefault(10),
    [SORT_KEY]: parseAsString.withDefault(""),
    filter: parseAsString.withDefault(""),
    userId: parseAsString.withDefault(""),
  });

  const { data, isLoading, refetch } = useGetAppointmentList(query, {
    placeholderData: (prev) => prev,
  });

  const onRowClick = useCallback(
    (row: IAppointment, type: AppointmentsDialogType) => {
      setCurrentRow(row);
      setOpen(type);
    },
    []
  );

  const onRefetch = useCallback(
    () => {
      refetch()
    },
    [refetch],
  )
  

  const appointmentsList = data?.data ?? [];
  const pageCount = data?.totalPage ?? 0;

  return {
    appointmentsList,
    pageCount,
    isLoading,
    onRowClick,
    onRefetch
  };
};
