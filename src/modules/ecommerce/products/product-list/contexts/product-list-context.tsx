"use client";

import { IProduct } from "@/apis/products";
import React, { useState } from "react";

export type ProductsDialogType = "active" | "de-active";

interface ProductsListContextType {
  open: ProductsDialogType | null;
  setOpen: (str: ProductsDialogType | null) => void;
  currentRow: IProduct | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<IProduct | null>>;
}
interface ProductsListContextType {}

const ProductsListContext = React.createContext<ProductsListContextType | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

export default function ProductsListProvider({ children }: Props) {
  const [open, setOpen] = useState<ProductsDialogType | null>(null);
  const [currentRow, setCurrentRow] = useState<IProduct | null>(null);

  return (
    <ProductsListContext value={{ open, setOpen, currentRow, setCurrentRow }}>
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
