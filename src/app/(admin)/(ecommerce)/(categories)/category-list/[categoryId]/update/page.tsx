import UpdateCategoryModule from "@/modules/ecommerce/categories/update-category";
import { ROUTES } from "@/utils/routes";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Update Category",
  description: "Edit and update category information",
};

type PageProps = { params: Promise<{ categoryId: string }> };

const CategoryUpdate = async (props: PageProps) => {
  const params = await props.params;
  if (!params.categoryId) {
    return redirect(ROUTES.NOT_FOUND);
  }

  return <UpdateCategoryModule id={params.categoryId} />;
};

export default CategoryUpdate;
