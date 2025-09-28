"use client";

import {
  CreateAppointmentRequest,
  IAppointment,
  useCreateAppointmentMutation,
  useDeleteAppointmentMutation,
  useUpdateAppointmentMutation,
} from "@/apis/appointments";
import { handleToastError } from "@/utils/common";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  AppointmentsDialogType,
  useAppointmentsList,
} from "../contexts/appointments-list-context";
import {
  AddAppointmentFormData,
  addAppointmentSchema,
  defaultValues,
} from "./validation";

type Props = {
  currentRow: IAppointment | null;
  onClose: () => void;
  onSubmitAfterSuccess: () => void;
};

const initialDialogValues = {
  update: false,
  cancel: false,
};

export const useAppointmentsListViewDialog = ({
  currentRow,
  onClose,
  onSubmitAfterSuccess,
}: Props) => {
  const [dialogValues, setDialogValues] = useState(initialDialogValues);

  const updateAppointmentMutation = useUpdateAppointmentMutation();

  const isLoading = updateAppointmentMutation.isPending;

  const onCancelAppointment = async () => {
    if (!currentRow) return;
    try {
      await updateAppointmentMutation.mutateAsync({
        ...currentRow,
        status: "cancelled",
      });
      toast.success("Cancel appointment successfully");
      setDialogValues(initialDialogValues);
      onClose();
    } catch (error) {
      handleToastError(error);
    }
  };

  const onOpenUpdateDialog = useCallback(() => {
    setDialogValues((prev) => ({ ...prev, update: true }));
  }, []);

  const onOpenCancelDialog = useCallback(() => {
    setDialogValues((prev) => ({ ...prev, cancel: true }));
  }, []);

  const onResetDialogValues = useCallback(() => {
    setDialogValues(initialDialogValues);
  }, []);

  const onUpdateAppointment = () => {
    onResetDialogValues()
    onClose();
    onSubmitAfterSuccess();
  }

  return {
    currentRow,
    isLoading,
    dialogValues,
    onClose,
    onOpenUpdateDialog,
    onOpenCancelDialog,
    onResetDialogValues,
    onCancelAppointment,
    onSubmitAfterSuccess,
    onUpdateAppointment
  };
};
