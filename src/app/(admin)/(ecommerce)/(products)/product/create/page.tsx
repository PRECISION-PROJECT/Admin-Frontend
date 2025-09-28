import { CreateProductModule } from "@/modules/ecommerce/products";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create Product",
  description: "Add a new product to the store",
};

const CreateProductPage = () => {
  return <CreateProductModule />;
};

export default CreateProductPage;
