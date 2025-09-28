import { CreateCategoryModule } from "@/modules/ecommerce/categories";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create Category",
  description: "Add a new product category",
};

const CreateCategoryPage = () => {
  return <CreateCategoryModule />;
};

export default CreateCategoryPage;
