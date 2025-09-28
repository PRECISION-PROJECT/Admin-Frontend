"use client";
import { Icons } from "@/assets/icons";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/navigation";
import React from "react";

const CategoryListHeaderUI = () => {
  const router = useRouter();
  return (
    <div className="flex items-start justify-between">
      <Heading
        title="Categories"
        description="Manage product categories and their properties"
      />

      <Button
        size="default"
        className="space-x-1"
        onClick={() => router.push(ROUTES.CREATE_CATEGORY)}
      >
        <span>Add Category</span> <Icons.plusCircle size={18} />
      </Button>
    </div>
  );
};

export default CategoryListHeaderUI;
