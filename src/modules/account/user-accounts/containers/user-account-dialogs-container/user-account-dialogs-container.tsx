"use client";

import React from "react";
import { useUserAccountDialogs } from "../../hooks/use-user-account-dialogs";
import {
  UserAccountActiveDialog,
  UserAccountDeleteDialog,
} from "../../components";

const UserAccountDialogsContainer = () => {
  const { open, currentRow, isLoading, onClose, onSubmit } =
    useUserAccountDialogs();

  if (!currentRow) return null;

  return (
    <>
      {open === "delete" && (
        <UserAccountDeleteDialog
          open={open === "delete"}
          isLoading={isLoading}
          currentRow={currentRow}
          onClose={onClose}
          onSubmit={onSubmit}
        />
      )}
      {open === "active" && (
        <UserAccountActiveDialog
          type={"active"}
          open={open === "active"}
          isLoading={isLoading}
          currentRow={currentRow}
          onClose={onClose}
          onSubmit={onSubmit}
        />
      )}
      {open === "un-active" && (
        <UserAccountActiveDialog
          type={"un-active"}
          open={open === "un-active"}
          isLoading={isLoading}
          currentRow={currentRow}
          onClose={onClose}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default UserAccountDialogsContainer;
