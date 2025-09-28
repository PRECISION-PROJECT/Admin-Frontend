import { IAppointment } from "@/apis/appointments";
import React from "react";
import { AppointmentsDialogType } from "../../contexts/appointments-list-context";
import {
  useAppointmentsListCreateDialog,
  useAppointmentsListViewDialog,
} from "../../hooks";
import { Modal } from "@/components/ui/modal";
import { FormWrapper } from "@/components/ui/form";
import {
  AddAppointmentFormDialogUI,
  CancelAppointmentDialogUI,
  ViewAppointmentDialogUI,
} from "../../components";
import AppointmentsListCreateDialogContainer from "../appointments-list-create-dialog-container";

type Props = {
  open: boolean;
  currentRow: IAppointment | null;
  onClose: () => void;
  onSubmitAfterSuccess: () => void;
};

const AppointmentsListViewDialogContainer = (props: Props) => {
  const {
    currentRow,
    isLoading,
    dialogValues,
    onOpenUpdateDialog,
    onOpenCancelDialog,
    onResetDialogValues,
    onCancelAppointment,
    onUpdateAppointment,
  } = useAppointmentsListViewDialog(props);

  return (
    <>
      <Modal
        title="Appointment Details"
        description="Complete information about this appointment"
        isOpen={props.open}
        onClose={props.onClose}
      >
        <ViewAppointmentDialogUI
          appointment={currentRow as IAppointment}
          onClose={props.onClose}
          onUpdate={onOpenUpdateDialog}
          onCancel={onOpenCancelDialog}
        />
      </Modal>

      {dialogValues.update && currentRow && (
        <AppointmentsListCreateDialogContainer
          type="edit"
          open={dialogValues.update}
          currentRow={currentRow}
          onClose={onResetDialogValues}
          onSubmitAfterSuccess={onUpdateAppointment}
        />
      )}

      {dialogValues.cancel && currentRow && (
        <CancelAppointmentDialogUI
          isLoading={isLoading}
          currentRow={currentRow}
          open={dialogValues.cancel}
          onClose={onResetDialogValues}
          onSubmit={onCancelAppointment}
        />
      )}
    </>
  );
};

export default AppointmentsListViewDialogContainer;
