"use client";

import React from "react";

interface UpdateCategoryContextType {}

const UpdateCategoryContext =
  React.createContext<UpdateCategoryContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function UpdateCategoryProvider({ children }: Props) {
  return <UpdateCategoryContext value={{}}>{children}</UpdateCategoryContext>;
}

export const useUpdateCategory = () => {
  const updateCategoryContext = React.useContext(UpdateCategoryContext);

  if (!updateCategoryContext) {
    throw new Error(
      "useUpdateCategory has to be used within <UpdateCategoryContext>"
    );
  }

  return updateCategoryContext;
};
