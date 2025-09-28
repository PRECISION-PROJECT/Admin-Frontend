import UserAccountsModule from "@/modules/account/user-accounts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "User Accounts",
  description: "Manage user accounts and permissions",
};

const UserAccountsPage = () => {
  return <UserAccountsModule />;
};

export default UserAccountsPage;
