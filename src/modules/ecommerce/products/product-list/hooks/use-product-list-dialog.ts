"use client";

import {
  KEYS,
  useActiveProductMutation,
  useDeactiveProductMutation,
} from "@/apis/products";
import { queryClient } from "@/components/providers/QueryClientProvider";
import { handleToastError } from "@/utils/common";
import { toast } from "sonner";
import { useProductsList } from "../contexts/product-list-context";

export const useProductListDialog = () => {
  const { open, currentRow, setOpen, setCurrentRow } = useProductsList();

  const useActiveProductMutate = useActiveProductMutation();
  const useDeactiveProductMutate = useDeactiveProductMutation();

  const isLoading =
    useActiveProductMutate.isPending || useDeactiveProductMutate.isPending;

  const onClose = () => {
    setCurrentRow(null);
    setOpen(null);
  };

  const onActive = async (id: string) => {
    try {
      await useActiveProductMutate.mutateAsync({ id });
      toast.success(`Product ${currentRow?.name} active successfully`);
      queryClient.invalidateQueries({
        queryKey: [KEYS.PRODUCTS_LIST],
        exact: false,
      });
      onClose();
    } catch (error) {
      handleToastError(error);
    }
  };

  const onDeactive = async (id: string) => {
    try {
      await useDeactiveProductMutate.mutateAsync({ id });
      toast.success(`Product ${currentRow?.name} deactive successfully`);
      queryClient.invalidateQueries({
        queryKey: [KEYS.PRODUCTS_LIST],
        exact: false,
      });
      onClose();
    } catch (error) {
      handleToastError(error);
    }
  };

  const onSubmit = async () => {
    if (!currentRow?.id || isLoading) return;
    if (open === "active") {
      return await onActive(currentRow.id);
    }
    return await onDeactive(currentRow.id);
  };

  return { open, currentRow, isLoading, onClose, onSubmit };
};
