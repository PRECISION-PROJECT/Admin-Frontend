"use client";

import React from "react";

interface CreateProductContextType {}

const CreateProductContext =
  React.createContext<CreateProductContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function CreateProductProvider({ children }: Props) {
  return <CreateProductContext value={{}}>{children}</CreateProductContext>;
}

export const useCreateProduct = () => {
  const createProductContext = React.useContext(CreateProductContext);

  if (!createProductContext) {
    throw new Error(
      "useCreateProduct has to be used within <CreateProductContext>"
    );
  }

  return createProductContext;
};
