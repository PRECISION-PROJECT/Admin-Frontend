import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ProductsModule from "@/modules/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Products Management",
};

const ProductsPage = () => {
  return (
    <div>
      <PageBreadcrumb pageTitle="Products Management" />
      <ProductsModule />
    </div>
  );
};

export default ProductsPage;