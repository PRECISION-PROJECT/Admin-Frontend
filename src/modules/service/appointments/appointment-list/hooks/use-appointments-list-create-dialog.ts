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
  type: AppointmentsDialogType;
  currentRow: IAppointment | null;
  onClose: () => void;
  onSubmitAfterSuccess: () => void;
};

type DialogValues = {
  update: boolean;
  delete: boolean;
};

const initialDialogValues = {
  update: false,
  delete: false,
};

export const useAppointmentsListCreateDialog = ({
  currentRow,
  type,
  onClose,
  onSubmitAfterSuccess
}: Props) => {
  const [dialogValues, setDialogValues] =
    useState<DialogValues>(initialDialogValues);

  const formMethods = useForm<AddAppointmentFormData>({
    resolver: zodResolver(addAppointmentSchema),
    defaultValues: defaultValues,
    mode: "onChange"
  });

  const updateAppointmentMutation = useUpdateAppointmentMutation();
  const createAppointmentMutation = useCreateAppointmentMutation();

  const isLoading =
    updateAppointmentMutation.isPending ||
    createAppointmentMutation.isPending;

  const onAddAppointment = async (data: AddAppointmentFormData) => {
    try {
      await createAppointmentMutation.mutateAsync({
        ...data,
        userId: data.userId ?? "",
        dateTime: data.dateTime?.toISOString() ?? "",
      });
      toast.success("Add appointment successfully");
      formMethods.reset(defaultValues);
      onSubmitAfterSuccess();
    } catch (error) {
      handleToastError(error);
    }
  };

  const onUpdateAppointment = async (data: AddAppointmentFormData, currentRow: IAppointment) => {
    try {
      await updateAppointmentMutation.mutateAsync({
        ...data,
        userId: data.userId ?? "",
        dateTime: data.dateTime?.toISOString() ?? "",
        id: currentRow?.id ?? "",
      });
      toast.success("Update appointment successfully");
      formMethods.reset(defaultValues);
      onSubmitAfterSuccess();
    } catch (error) {
      handleToastError(error);
    }
  };

  const onSubmitForm = async (data: AddAppointmentFormData) => {
    if (isLoading) return;

    switch (type) {
      case "add":
        await onAddAppointment(data);
        break;
      case "edit":
        await onUpdateAppointment(data, currentRow as IAppointment);
        break;
      default:
        break;
    }

  };

  const onOpenUpdateDialog = useCallback(() => {
    setDialogValues((prev) => ({ ...prev, update: true }));
  }, []);

  const onOpenDeleteDialog = useCallback(() => {
    setDialogValues((prev) => ({ ...prev, delete: true }));
  }, []);

  const onResetDialogValues = useCallback(() => {
    setDialogValues(initialDialogValues);
  }, []);

  useEffect(() => {
    if (currentRow) {
      return formMethods.reset({
        ...currentRow,
        dateTime: new Date(currentRow.dateTime) ?? undefined,
      });
    }

    return formMethods.reset(defaultValues);
  }, []);

  return {
    type,
    currentRow,
    isLoading,
    formMethods,
    dialogValues,
    isEdit: !!currentRow,
    onSubmitForm,
    onClose,
    onOpenUpdateDialog,
    onOpenDeleteDialog,
    onResetDialogValues,
  };
};
