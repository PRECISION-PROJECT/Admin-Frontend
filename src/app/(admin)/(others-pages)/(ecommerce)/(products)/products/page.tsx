import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ProductListTable from "@/components/ecommerce/ProductListTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js E-commerce Products | Precision Admin - Next.js Dashboard Template",
  description:
    "This is Next.js E-commerce Products Precision Admin Dashboard Template",
};

export default function ProductPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Products" />
      <ProductListTable />
    </div>
  );
}
