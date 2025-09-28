"use client";

import { useState } from "react";
import { handleToastError } from "@/utils/common";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ROUTES } from "@/utils/routes";
import { useDeleteBlogMutation } from "@/apis/blogs";

export const useUpdateBlogAction = (id: string) => {
  const [openDialog, setOpenDialog] = useState(false);
  const deleteBlogMutation = useDeleteBlogMutation();
  const router = useRouter();

  const onDelete = async () => {
    if (!id || deleteBlogMutation.isPending) return;
    try {
      await deleteBlogMutation.mutateAsync({ id });
      setOpenDialog(false);
      toast.success("Delete blog successfully, redirecting to blog list");
      setTimeout(() => {
        router.push(ROUTES.BLOGS_LIST);
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
    isLoading: deleteBlogMutation.isPending,
    id,
    openDialog,
    onOpenDialog,
    onDelete,
    onCloseDialog,
  };
};
