"use client";

import { IAppointment } from "@/apis/appointments";
import React, { useState } from "react";

export type AppointmentsDialogType = "add" | "edit" | "delete" | "view";

export type AppointmentStatus = "completed" | "pending" | "cancelled"

export type AppointmentUserRole = "USER" | "ADMIN"

interface AppointmentsListContextType {
  open: AppointmentsDialogType | null;
  setOpen: (str: AppointmentsDialogType | null) => void;
  currentRow: IAppointment | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<IAppointment | null>>;
}

const AppointmentsListContext = React.createContext<AppointmentsListContextType | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

export default function AppointmentsListProvider({ children }: Props) {
  const [open, setOpen] = useState<AppointmentsDialogType | null>(null);
  const [currentRow, setCurrentRow] = useState<IAppointment | null>(null);

  return (
    <AppointmentsListContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </AppointmentsListContext>
  );
}

export const useAppointmentsList = () => {
  const appointmentsListContext = React.useContext(AppointmentsListContext);

  if (!appointmentsListContext) {
    throw new Error(
      "useAppointmentsList has to be used within <AppointmentsListContext>"
    );
  }

  return appointmentsListContext;
};
