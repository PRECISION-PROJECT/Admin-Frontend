"use client";

import { useDeleteCategoryMutation } from "@/apis/categories";
import { useState } from "react";
import { handleToastError } from "@/utils/common";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ROUTES } from "@/utils/routes";

export const useUpdateCategoryAction = (id: string) => {
  const [openDialog, setOpenDialog] = useState(false);
  const deleteCategoryMutation = useDeleteCategoryMutation();
  const router = useRouter();

  const onDelete = async () => {
    if (!id || deleteCategoryMutation.isPending) return;
    try {
      await deleteCategoryMutation.mutateAsync({ id });
      setOpenDialog(false);
      toast.success("Delete category successfully, redirecting to category list");
      setTimeout(() => {
        router.push(ROUTES.CATEGORY_LIST);
      }, 200);
    } catch (error) {
      handleToastError(error);
    }
  };

  const onOpenDialog = () => {
    setOpenDialog(true);
  };

  const onCloseDialog = () => {
    setOpenDialog(false);
  };

  return {
    isLoading: deleteCategoryMutation.isPending,
    id,
    openDialog,
    onOpenDialog,
    onDelete,
    onCloseDialog,
  };
};
