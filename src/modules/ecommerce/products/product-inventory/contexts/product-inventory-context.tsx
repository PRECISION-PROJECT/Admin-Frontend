"use client";

import React from "react";

interface ProductInventoryContextType {}

const ProductInventoryContext = React.createContext<ProductInventoryContextType | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

export default function ProductInventoryProvider({ children }: Props) {
  return <ProductInventoryContext value={{}}>{children}</ProductInventoryContext>;
}

export const useProductInventory = () => {
  const productInventoryContext = React.useContext(ProductInventoryContext);

  if (!productInventoryContext) {
    throw new Error(
      "useProductInventory has to be used within <ProductInventoryContext>"
    );
  }

  return productInventoryContext;
};
