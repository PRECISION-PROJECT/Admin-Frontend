import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import CategoriesModule from "@/modules/categories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
  description: "Categories Management",
};

export default function CategoriesPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Categories Management" />
      <CategoriesModule />
    </div>
  );
}
