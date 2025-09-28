"use client";
import { Heading } from "@/components/shared/heading";

const ProductLowStockHeaderUI = () => {
  return (
    <div className="flex items-start justify-between">
      <Heading
        title="Product Low Stock"
        description="Manage list products low stock"
      />
    </div>
  );
};

export default ProductLowStockHeaderUI;
