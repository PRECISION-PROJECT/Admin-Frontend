"use client";
import { Icons } from "@/assets/icons";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  id: string;
}

const CategoryDetailHeaderUI = ({id}: Props) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <Heading
        title="Category Detail"
        description={`Category ID: ${id}`}
      />

      <Button
        size="default"
        className="space-x-1"
        onClick={() => router.push(ROUTES.CATEGORY_UPDATE.replace(":id", id))}
      >
        <Icons.edit size={18} /> <span>Edit Category</span> 
      </Button>
    </div>
  );
};

export default CategoryDetailHeaderUI;
