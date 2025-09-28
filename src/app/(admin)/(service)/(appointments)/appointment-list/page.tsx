import { AppointmentsListModule } from "@/modules/service";
import { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
  title: "Appointments",
  description: "Manage customer appointments and scheduling",
};

const AppointmentListPage = () => {
  return (
    <AppointmentsListModule />
  )
}

export default AppointmentListPage