"use client";

import { AlertModal } from "@/components/shared/alert-modal";
import React from "react";
import { useProductListDialog } from "../../hooks";

const ProductListDialogContainer = () => {
  const { open, isLoading, onClose, onSubmit } = useProductListDialog();

  return (
    <>
      <AlertModal
        onClose={onClose}
        loading={isLoading}
        onConfirm={onSubmit}
        isOpen={!!open}
        title={`Are you sure you want to ${
          open === "active" ? "active" : "deactive"
        } this product?`}
        description={`This action can be reverted later.`}
      />
    </>
  );
};

export default ProductListDialogContainer;
