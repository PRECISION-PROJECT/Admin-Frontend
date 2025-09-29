"use client";

import {
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} from "@/apis/orders/queries";
import { handleToastError } from "@/utils/common";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useOrderList } from "../contexts/order-list-context";
import {
  defaultValues,
  UpdateOrderFormData,
  updateOrderSchema,
} from "./validation";

type Props = {
  onSuccess: () => void;
};

export const useOrderListDialog = (props: Props) => {
  const [onOpenDeleteDialog, setOnOpenDeleteDialog] = useState(false);
  const { open, currentRow, setOpen, setCurrentRow } = useOrderList();

  const formMethods = useForm<UpdateOrderFormData>({
    resolver: zodResolver(updateOrderSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const updateOrderMutate = useUpdateOrderMutation();
  const deleteOrderMutate = useDeleteOrderMutation();
  const isLoading = updateOrderMutate.isPending || deleteOrderMutate.isPending;

  const onOpenDeleteDialogChange = useCallback(() => {
    setOnOpenDeleteDialog((prev) => !prev);
  }, []);

  const onCloseAfterSuccess = () => {
    props.onSuccess();
    setOnOpenDeleteDialog(false);
    setOpen(null);
    setCurrentRow(null);
  };

  const onCloseAll = () => {
    setOnOpenDeleteDialog(false);
    setOpen(null);
    setCurrentRow(null);
  };

  const onSubmitDelete = async () => {
    if (isLoading || !currentRow?.id) return;
    try {
      await deleteOrderMutate.mutateAsync({
        id: currentRow.id,
      });
      toast.success("Order deleted successfully");
      onCloseAfterSuccess();
    } catch (error) {
      handleToastError(error);
    }
  };

  const onSubmit = async (data: UpdateOrderFormData) => {
    if (isLoading || !currentRow?.id) return;

    try {
      await updateOrderMutate.mutateAsync({
        id: currentRow.id,
        status: data.status,
        deliveryAddress: data.deliveryAddress,
        notes: data.notes,
        estimatedDeliveryDate: data.estimatedDeliveryDate?.toISOString() ?? "",
      });

      toast.success("Order updated successfully");
      onCloseAfterSuccess();
    } catch (error) {
      handleToastError(error);
    }
  };

  useEffect(() => {
    if (!currentRow) return;
    formMethods.reset({
      deliveryAddress: currentRow.deliveryAddress ?? "",
      notes: currentRow.notes ?? "",
      status: currentRow.status ?? "",
      paymentStatus: currentRow.paymentStatus ?? "",
      estimatedDeliveryDate: currentRow.estimatedDeliveryDate
        ? new Date(currentRow.estimatedDeliveryDate)
        : undefined,
    });
  }, [currentRow]);

  return {
    open,
    isLoading,
    formMethods,
    onOpenDeleteDialog,
    onOpenDeleteDialogChange,
    onSubmit,
    onSubmitDelete,
    onCloseAll,
  };
};
