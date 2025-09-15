import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ProductInventoryModule from "@/modules/products-inventory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Inventory",
  description: "Products Inventory Management",
};

const ProductInventoryPage = () => {
  return (
    <div>
      <PageBreadcrumb pageTitle="Products Inventory Management" />
      <ProductInventoryModule />
    </div>
  );
};

export default ProductInventoryPage;