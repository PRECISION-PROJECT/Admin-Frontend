import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import SonnerTest from "@/components/test/SonnerTest";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sonner Toast Test | Precision Admin - Next.js Dashboard Template",
  description:
    "This is Sonner Toast Test page for Precision Admin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function SonnerTestPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Sonner Toast Test" />
      <SonnerTest />
    </div>
  );
}

