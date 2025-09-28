"use client";

import React from "react";

interface BlogsListContextType {}

const BlogsListContext = React.createContext<BlogsListContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function BlogsListProvider({ children }: Props) {
  return <BlogsListContext value={{}}>{children}</BlogsListContext>;
}

export const useBlogsList = () => {
  const blogsListContext = React.useContext(BlogsListContext);

  if (!blogsListContext) {
    throw new Error("useBlogsList has to be used within <BlogsListContext>");
  }

  return blogsListContext;
};
