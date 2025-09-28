"use client";
import { Heading } from "@/components/shared/heading";

const ProductInventoryHeaderUI = () => {
  return (
    <div className="flex items-start justify-between">
      <Heading
        title="Product Inventory"
        description="Manage list products inventory"
      />
    </div>
  );
};

export default ProductInventoryHeaderUI;
