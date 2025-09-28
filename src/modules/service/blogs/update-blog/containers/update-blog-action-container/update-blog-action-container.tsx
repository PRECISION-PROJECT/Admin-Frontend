"use client";

import React from "react";
import { useUpdateBlogAction } from "../../hooks";
import { UpdateBlogActionUI } from "../../components";
import { AlertModal } from "@/components/shared/alert-modal";

type Props = {
  id: string;
};

const UpdateBlogActionContainer = (props: Props) => {
  const { id, isLoading, onCloseDialog, onDelete, onOpenDialog, openDialog } =
    useUpdateBlogAction(props.id);
  return (
    <>
      <UpdateBlogActionUI id={id} onOpenDialog={onOpenDialog} />
      <AlertModal
        title="Do you want to delete this blog?"
        isOpen={openDialog}
        onClose={onCloseDialog}
        onConfirm={onDelete}
        loading={isLoading}
      />
    </>
  );
};

export default UpdateBlogActionContainer;
