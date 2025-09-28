"use client";

import React from "react";



interface ProductsListContextType {
}

const ProductsListContext = React.createContext<ProductsListContextType | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

export default function ProductsListProvider({ children }: Props) {

  return (
    <ProductsListContext value={{}}>
      {children}
    </ProductsListContext>
  );
}

export const useProductsList = () => {
  const productsListContext = React.useContext(ProductsListContext);

  if (!productsListContext) {
    throw new Error(
        "useProductsList has to be used within <ProductsListContext>"
    );
  }

  return productsListContext;
};
