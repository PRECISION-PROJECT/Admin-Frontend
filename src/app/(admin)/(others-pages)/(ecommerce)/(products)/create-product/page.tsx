import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import CreateProductModule from "@/modules/create-product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Products",  
  description: "Create new product",
};

export default function AddProductPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Add Products" />
      <CreateProductModule />
    </div>
  );
}
