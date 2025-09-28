import { CategoryListModule } from "@/modules/ecommerce/categories";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Category List",
  description: "Manage product categories and organization",
};

const CategoryListPage = () => {
  return <CategoryListModule />;
};

export default CategoryListPage;
