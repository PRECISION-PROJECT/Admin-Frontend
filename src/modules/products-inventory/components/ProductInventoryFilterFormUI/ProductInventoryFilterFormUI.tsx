import FormTextField from "@/components/form/form-fields/FormTextField";
import FormSelectField from "@/components/form/form-fields/FormSelectField";
import FormMultiSelectField from "@/components/form/form-fields/FormMultiSelectField";
import React from "react";
import { useFormContext } from "react-hook-form";

const productTypeOptions = [
  { value: "moulding", label: "Moulding" },
  { value: "architectural", label: "Architectural" },
  { value: "mantel", label: "Mantel" },
  { value: "wood_import", label: "Wood Import" },
  { value: "wood_export", label: "Wood Export" },
];

const productStatusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "discontinued", label: "Discontinued" },
  { value: "out_of_stock", label: "Out of Stock" },
];

const sortByOptions = [
  { value: "name", label: "Name" },
  { value: "price", label: "Price" },
  { value: "createdAt", label: "Created Date" },
  { value: "viewCount", label: "View Count" },
  { value: "sortOrder", label: "Sort Order" },
];

const sortOrderOptions = [
  { value: "ASC", label: "Ascending" },
  { value: "DESC", label: "Descending" },
];

const ProductInventoryFilterFormUI = () => {
  const { control } = useFormContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <FormTextField
        control={control}
        name="search"
        label="Search"
        placeholder="Search by name, description, SKU..."
      />
      <FormTextField
        control={control}
        name="categoryId"
        label="Category ID"
        placeholder="Enter category ID"
      />
      <FormMultiSelectField
        control={control}
        name="types"
        label="Product Type"
        options={productTypeOptions}
        placeholder="Select product types"
      />
      <FormSelectField
        control={control}
        name="status"
        label="Status"
        options={productStatusOptions}
        placeholder="Select status"
      />
      <FormTextField
        control={control}
        name="minPrice"
        label="Min Price"
        placeholder="Enter min price"
        type="number"
      />
      <FormTextField
        control={control}
        name="maxPrice"
        label="Max Price"
        placeholder="Enter max price"
        type="number"
      />
      <FormTextField
        control={control}
        name="material"
        label="Material"
        placeholder="Enter material"
      />
      <FormTextField
        control={control}
        name="color"
        label="Color"
        placeholder="Enter color"
      />
      <FormTextField
        control={control}
        name="finish"
        label="Finish"
        placeholder="Enter finish"
      />
      <FormSelectField
        control={control}
        name="sortBy"
        label="Sort By"
        options={sortByOptions}
        placeholder="Select sort field"
      />
      <FormSelectField
        control={control}
        name="sortOrder"
        label="Sort Order"
        options={sortOrderOptions}
        placeholder="Select sort order"
      />
    </div>
  );
};

export default ProductInventoryFilterFormUI;
