"use client";

import { AlertModal } from "@/components/shared/alert-modal";
import { FormWrapper } from "@/components/ui/form";
import { Modal } from "@/components/ui/modal";
import React from "react";
import { OrderListFormDialogUI } from "../../components";
import { useOrderListDialog } from "../../hooks";

type Props = {
  onSuccess: () => void;
};

const OrderListDialogContainer = (props: Props) => {
  const {
    open,
    isLoading,
    formMethods,
    onOpenDeleteDialog,
    onOpenDeleteDialogChange,
    onSubmit,
    onSubmitDelete,
    onCloseAll,
  } = useOrderListDialog(props);

  return (
    <>
      <Modal
        title="Appointment Details"
        description="Complete information about this appointment"
        isOpen={open === "edit"}
        onClose={onCloseAll}
      >
        <FormWrapper form={formMethods} onSubmit={onSubmit}>
          <OrderListFormDialogUI
            isLoading={isLoading}
            onClose={onCloseAll}
            onDelete={onOpenDeleteDialogChange}
          />
        </FormWrapper>
      </Modal>

      {onOpenDeleteDialog && (
        <AlertModal
          title="Do you want to delete this order?"
          isOpen={onOpenDeleteDialog}
          onClose={onOpenDeleteDialogChange}
          onConfirm={onSubmitDelete}
          loading={isLoading}
        />
      )}
    </>
  );
};

export default OrderListDialogContainer;
