import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import NotificationExample from "@/components/ui/notification/NotificationExample";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Notifications | Precision Admin - Next.js Dashboard Template",
  description:
    "This is Next.js Notifications page for Precision Admin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function Notifications() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Notifications" />
      <NotificationExample />
    </div>
  );
}
