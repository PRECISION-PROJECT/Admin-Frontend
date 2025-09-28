import { ProductInventoryModule } from "@/modules/ecommerce/products";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Product Inventory",
  description: "Manage product stock levels and inventory tracking",
};

const ProductInventoryPage = () => {
  return <ProductInventoryModule />;
};

export default ProductInventoryPage;
