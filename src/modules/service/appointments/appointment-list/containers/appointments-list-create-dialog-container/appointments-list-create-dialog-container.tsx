import { IAppointment } from "@/apis/appointments";
import React from "react";
import { AppointmentsDialogType } from "../../contexts/appointments-list-context";
import { useAppointmentsListCreateDialog } from "../../hooks";
import { Modal } from "@/components/ui/modal";
import { FormWrapper } from "@/components/ui/form";
import { AddAppointmentFormDialogUI } from "../../components";

type Props = {
  type: AppointmentsDialogType;
  open: boolean;
  currentRow: IAppointment | null;
  onClose: () => void;
  onSubmitAfterSuccess: () => void;
};

const AppointmentsListCreateDialogContainer = (props: Props) => {
  const { isLoading, formMethods, isEdit, onSubmitForm } =
    useAppointmentsListCreateDialog(props);
  return (
    <Modal
      title={isEdit ? "Edit Appointment" : "Add Appointment"}
      description={
        isEdit
          ? "Update the appointment details below."
          : "Add the appointment details below."
      }
      isOpen={props.open}
      onClose={props.onClose}
    >
      <FormWrapper form={formMethods} onSubmit={onSubmitForm}>
        <AddAppointmentFormDialogUI
          isLoading={isLoading}
          onClose={props.onClose}
          isEdit={isEdit}
        />
      </FormWrapper>
    </Modal>
  );
};

export default AppointmentsListCreateDialogContainer;
