import { IAppointment } from "@/apis/appointments";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import React from "react";

type Props = {
  currentRow: IAppointment;
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  isLoading: boolean;
};

const CancelAppointmentDialogUI = ({
  currentRow,
  isLoading,
  open,
  onClose,
  onSubmit,
}: Props) => {
  return (
    <Modal
      title="Cancel Appointment?"
      description="This action cannot be undone."
      isOpen={open}
      onClose={onClose}
    >
      <div className="space-y-4">
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Are you sure you want to cancel the appointment with{" "}
            <span className="font-medium text-foreground">
              {currentRow?.customerName ?? "-"}
            </span>
            ?
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            The customer will be notified about the cancellation.
          </p>
        </div>

        <div className="flex w-full items-center justify-end space-x-2 pt-6">
          <Button
            disabled={isLoading}
            variant="outline"
            type="button"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            disabled={isLoading}
            variant="destructive"
            type="button"
            onClick={onSubmit}
          >
            OK
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CancelAppointmentDialogUI;
