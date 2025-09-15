import FormTextField from "@/components/form/form-fields/FormTextField";
import React from "react";
import { useFormContext } from "react-hook-form";

const ProductLowStockFilterFormUI = () => {
  const { control } = useFormContext();
  return (
    <div className="flex items-center gap-4">
      <FormTextField
        control={control}
        name="search"
        label="Search"
        placeholder="Search by name, description, SKU..."
        className="flex-1"
      />
    </div>
  );
};

export default ProductLowStockFilterFormUI;
