import PageContainer from "@/components/containers/page-container";
import React, { Suspense } from "react";
import UserAccountProvider from "./contexts/user-account-context";
import { UserAccountHeaderUI } from "./components";
import { Separator } from "@/components/ui/separator";
import { UserAccountDialogsContainer, UserAccountTableContainer } from "./containers";

const UserAccountsModule = () => {
  return (
    <UserAccountProvider>
      <PageContainer scrollable={false}>
        <div className="flex flex-1 flex-col space-y-4">
          <UserAccountHeaderUI />
          <Separator />
          <UserAccountTableContainer />
        </div>
        <UserAccountDialogsContainer />
      </PageContainer>
    </UserAccountProvider>
  );
};

export default UserAccountsModule;
