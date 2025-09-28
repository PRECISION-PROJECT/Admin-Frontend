"use client";

import React from "react";
import { useUpdateCategoryAction } from "../../hooks";
import { UpdateCategoryActionUI } from "../../components";
import { AlertModal } from "@/components/shared/alert-modal";

type Props = {
  id: string;
};

const UpdateCategoryActionContainer = (props: Props) => {
  const { id, isLoading, onCloseDialog, onDelete, onOpenDialog, openDialog } =
    useUpdateCategoryAction(props.id);
  return (
    <>
      <UpdateCategoryActionUI id={id} onOpenDialog={onOpenDialog} />
      <AlertModal
        title="Do you want to delete this category?"
        isOpen={openDialog}
        onClose={onCloseDialog}
        onConfirm={onDelete}
        loading={isLoading}
      />
    </>
  );
};

export default UpdateCategoryActionContainer;
