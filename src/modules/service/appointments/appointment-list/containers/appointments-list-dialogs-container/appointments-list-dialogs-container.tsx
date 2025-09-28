"use client";

import { FormWrapper } from "@/components/ui/form";
import { AddAppointmentFormDialogUI } from "../../components";
import { useAppointmentsListDialogs } from "../../hooks/use-appointments-list-dialogs";
import AppointmentsListCreateDialogContainer from "../appointments-list-create-dialog-container";
import { memo } from "react";
import AppointmentsListViewDialogContainer from "../appointments-view-create-dialog-container";

type Props = {
  onRefetch: () => void;
};

const AppointmentsListDialogsContainer = ({ onRefetch }: Props) => {
  const { open, currentRow, onClose } = useAppointmentsListDialogs(onRefetch);

  return (
    <>
      {open === "add" && (
        <AppointmentsListCreateDialogContainer
          type="add"
          open={open === "add"}
          currentRow={null}
          onClose={onClose}
          onSubmitAfterSuccess={onClose}
        />
      )}
      {open === "view" && (
        <AppointmentsListViewDialogContainer
          open={open === "view"}
          currentRow={currentRow}
          onClose={onClose}
          onSubmitAfterSuccess={onRefetch}
        />
      )}
    </>
  );
};

export default memo(AppointmentsListDialogsContainer);
