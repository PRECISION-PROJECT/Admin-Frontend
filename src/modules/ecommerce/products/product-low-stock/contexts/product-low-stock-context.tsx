"use client";

import React from "react";

interface ProductLowStockContextType {}

const ProductLowStockContext = React.createContext<ProductLowStockContextType | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

export default function ProductLowStockProvider({ children }: Props) {
  return <ProductLowStockContext value={{}}>{children}</ProductLowStockContext>;
}

export const useProductLowStock = () => {
  const productLowStockContext = React.useContext(ProductLowStockContext);

  if (!productLowStockContext) {
    throw new Error(
      "useProductLowStock has to be used within <ProductLowStockContext>"
    );
  }

  return productLowStockContext;
};
