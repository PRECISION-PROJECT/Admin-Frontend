"use client";

import React, { useMemo } from "react";
import { columns } from "./AppointmentListContainer.config";
import { AppointmentListTableUI } from "../../components";
import { Appointment } from "@/api/appointments/response.dto";
import { GetAppointmentListParams } from "@/api/appointments/request.dto";

type Props = {
  metaData: {
    totalPages: number;
  };
  appointmentData: Appointment[];
  queryParams: GetAppointmentListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetAppointmentListParams) => void;
};

const AppointmentListContainer = (props: Props) => {
  const {
    metaData,
    isLoading,
    queryParams,
    appointmentData,
    setQueryParams,
  } = props;
  const _columns = useMemo(() => columns(), []);
  return (
    <AppointmentListTableUI
      data={appointmentData}
      columns={_columns}
      isLoading={isLoading}
      metaData={metaData}
      filterParams={{ page: queryParams.page!, size: queryParams.size! }}
      onPageChange={(page) => {
        setQueryParams({ ...queryParams, page });
      }}
      onPageSizeChange={(size) => {
        setQueryParams({ ...queryParams, size });
      }}
    />
  );
};

export default AppointmentListContainer;
