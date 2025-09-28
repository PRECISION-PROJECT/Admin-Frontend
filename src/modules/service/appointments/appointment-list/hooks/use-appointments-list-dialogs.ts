"use client";

import { useAppointmentsList } from "../contexts/appointments-list-context";

export const useAppointmentsListDialogs = (onRefetch: () => void) => {
  const { open, currentRow, setOpen, setCurrentRow } = useAppointmentsList();

  const onClose = () => {
    onRefetch();
    setCurrentRow(null);
    setOpen(null);
  };

  return { open, currentRow, onClose };
};
