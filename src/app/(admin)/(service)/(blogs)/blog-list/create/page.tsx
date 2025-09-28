import { CreateBlogModule } from "@/modules/service";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create Blog",
  description: "Add a new blog to the store",
};

const CreateBlogPage = () => {
  return <CreateBlogModule />;
};

export default CreateBlogPage;
