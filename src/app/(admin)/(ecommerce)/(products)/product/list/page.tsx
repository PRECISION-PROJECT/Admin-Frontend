import { ProductListModule } from '@/modules/ecommerce/products';
import { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Product List",
  description: "Manage and view all products in the store",
};

const ProductListPage = () => {
  return (
    <ProductListModule />
  )
}

export default ProductListPage