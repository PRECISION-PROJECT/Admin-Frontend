"use client";

import { useUserAccount } from "../contexts/user-account-context";
import {
  useActivateUserMutate,
  useDeactivateUserMutate,
} from "@/apis/users/queries";
import { useDeleteUserMutate } from "@/apis/users/queries";
import { handleToastError } from "@/utils/common";
import { toast } from "sonner";

export const useUserAccountDialogs = () => {
  const { open, currentRow, setOpen, setCurrentRow } = useUserAccount();

  const useActivateUserMutation = useActivateUserMutate();
  const useDeleteUserMutation = useDeleteUserMutate();
  const useDeactivateUserMutation = useDeactivateUserMutate();
  const isLoading =
    useActivateUserMutation.isPending ||
    useDeleteUserMutation.isPending ||
    useDeactivateUserMutation.isPending;

  const onClose = () => {
    setCurrentRow(null);
    setOpen(null);
  };

  const onActive = async (id: string) => {
    try {
      await useActivateUserMutation.mutateAsync({ id });
      toast.success("Activate user successfully");
      onClose();
    } catch (error) {
      handleToastError(error);
    }
  };

  const onDelete = async (id: string) => {
    try {
      await useDeleteUserMutation.mutateAsync({ id });
      toast.success("Delete user successfully");
      onClose();
    } catch (error) {
      handleToastError(error);
    }
  };

  const onDeactivate = async (id: string) => {
    try {
      await useDeactivateUserMutation.mutateAsync({ id });
      toast.success("Deactivate user successfully");
      onClose();
    } catch (error) {
      handleToastError(error);
    }
  };

  const onSubmit = async () => {
    if (!currentRow?.id) return;
    switch (open) {
      case "active":
        await onActive(currentRow.id);
        break;
      case "delete":
        await onDelete(currentRow.id);
        break;
      case "un-active":
        await onDeactivate(currentRow.id);
        break;
      default:
        break;
    }
  };

  return { open, currentRow, isLoading, onClose, onSubmit };
};
