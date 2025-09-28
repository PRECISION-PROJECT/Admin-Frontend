"use client";

import { Category } from "@/apis/categories";
import React, { useState } from "react";

export type CategoriesDialogType =
  | "add"
  | "edit"
  | "delete"
  | "active"
  | "inactive";

interface CategoryListContextType {
  open: CategoriesDialogType | null;
  setOpen: (str: CategoriesDialogType | null) => void;
  currentRow: Category | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<Category | null>>;
}

const CategoryListContext = React.createContext<CategoryListContextType | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

export default function CategoryListProvider({ children }: Props) {
  const [open, setOpen] = useState<CategoriesDialogType | null>(null);
  const [currentRow, setCurrentRow] = useState<Category | null>(null);

  return (
    <CategoryListContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </CategoryListContext>
  );
}

export const useCategoryList = () => {
  const categoryListContext = React.useContext(CategoryListContext);

  if (!categoryListContext) {
    throw new Error(
      "useCategoryList has to be used within <CategoryListContext>"
    );
  }

  return categoryListContext;
};
