import { Metadata } from "next";
import ProductFeatureModule from "@/modules/products-feature";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

export const metadata: Metadata = {
  title: "Products Feature | Admin",
  description: "Manage featured products",
};

const ProductFeaturePage = () => {
  return (
    <div>
      <PageBreadcrumb pageTitle="Featured Products" />
      <ProductFeatureModule />
    </div>
  );
};

export default ProductFeaturePage;
