"use client";
import { Icons } from "@/assets/icons";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/navigation";
import React from "react";

const ProductListHeaderUI = () => {
  const router = useRouter();
  return (
    <div className="flex items-start justify-between">
      <Heading
        title="Product List"
        description="Manage list product and their properties"
      />

      <Button
        size="default"
        className="space-x-1"
        onClick={() => router.push(ROUTES.CREATE_PRODUCT)}
      >
        <span>Add a new product</span> <Icons.plusCircle size={18} />
      </Button>
    </div>
  );
};

export default ProductListHeaderUI;
