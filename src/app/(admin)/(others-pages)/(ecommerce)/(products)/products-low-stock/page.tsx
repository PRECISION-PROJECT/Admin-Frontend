import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ProductLowStockModule from "@/modules/products-low-stock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Low Stock",
  description: "Products Low Stock Management",
};

const ProductLowStockPage = () => {
  return (
    <div>
      <PageBreadcrumb pageTitle="Products Low Stock Management" />
      <ProductLowStockModule />
    </div>
  );
};

export default ProductLowStockPage;