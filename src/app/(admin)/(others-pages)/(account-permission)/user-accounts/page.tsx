import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import UserAccountsModule from "@/modules/user-accounts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Accounts ",
  description: "User Accounts ",
};

export default function UserPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="User Accounts Management" />
      <UserAccountsModule />
    </div>
  );
}
