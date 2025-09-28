"use client";

import React from "react";

interface CreateCategoryContextType {
}

const CreateCategoryContext = React.createContext<CreateCategoryContextType | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

export default function CreateCategoryProvider({ children }: Props) {

  return (
    <CreateCategoryContext value={{}}>
      {children}
    </CreateCategoryContext>
  );
}

export const useCreateCategory = () => {
  const createCategoryContext = React.useContext(CreateCategoryContext);

  if (!createCategoryContext) {
    throw new Error(
      "useCreateCategory has to be used within <CreateCategoryContext>"
    );
  }

  return createCategoryContext;
};
