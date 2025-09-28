import { BlogsListModule } from "@/modules/service";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Manage customer blogs",
};

const BlogListPage = () => {
  return <BlogsListModule />;
};

export default BlogListPage;
