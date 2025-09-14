"use client";

import React from "react";
import { useAppointment } from "../../hooks";
import AppointmentFilterContainer from "../AppointmentFilterContainer";
import AppointmentListContainer from "../AppointmentListContainer";

const AppointmentContainer = () => {
  const { queryParams, isLoading, appointmentData, metaData, setQueryParams } =
    useAppointment();
  return (
    <div className="p-4 sm:p-6 overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <AppointmentFilterContainer
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
      <AppointmentListContainer
        metaData={metaData}
        appointmentData={appointmentData}
        queryParams={queryParams}
        isLoading={isLoading}
        setQueryParams={setQueryParams}
      />
    </div>
  );
};

export default AppointmentContainer;
