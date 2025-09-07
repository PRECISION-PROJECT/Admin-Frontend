import InvoiceMain from "@/components/invoice/InvoiceMain";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Single Invoice | Precision Admin - Next.js Dashboard Template",
  description:
    "This is Next.js E-commerce  Single Invoice Precision Admin Dashboard Template",
};

export default function SingleInvoicePage() {
  return (
    <div>
      <InvoiceMain />
    </div>
  );
}
