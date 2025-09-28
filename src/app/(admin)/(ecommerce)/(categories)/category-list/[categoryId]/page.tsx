import { CategoryDetailModule } from '@/modules/ecommerce/categories';
import { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Category Details",
  description: "View and manage category information",
};

type PageProps = { params: Promise<{ categoryId: string }> };

const CategoryDetail = async (props: PageProps) => {
  const params = await props.params;
  return (
    <CategoryDetailModule id={params.categoryId} />
  )
}

export default CategoryDetail