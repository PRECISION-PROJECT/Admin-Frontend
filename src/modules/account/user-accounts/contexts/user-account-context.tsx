"use client";

import { IUserResponse } from "@/apis/auths";
import React, { useState } from "react";

export type UsersDialogType = "invite" | "add" | "edit" | "delete" | "active" | "un-active";

interface UserAccountContextType {
  open: UsersDialogType | null;
  setOpen: (str: UsersDialogType | null) => void;
  currentRow: IUserResponse | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<IUserResponse | null>>;
}

const UserAccountContext = React.createContext<UserAccountContextType | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

export default function UserAccountProvider({ children }: Props) {
  const [open, setOpen] = useState<UsersDialogType | null>(null);
  const [currentRow, setCurrentRow] = useState<IUserResponse | null>(null);

  return (
    <UserAccountContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </UserAccountContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserAccount = () => {
  const userAccountContext = React.useContext(UserAccountContext);

  if (!userAccountContext) {
    throw new Error(
      "useUserAccount has to be used within <UserAccountContext>"
    );
  }

  return userAccountContext;
};
