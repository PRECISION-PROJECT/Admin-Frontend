import React from "react";
import { useFormContext } from "react-hook-form";
import FormTextField from "@/components/form/form-fields/FormTextField";
import FormSelectField from "@/components/form/form-fields/FormSelectField";
import FormTextAreaField from "@/components/form/form-fields/FormTextAreaField";
import FormCheckboxField from "@/components/form/form-fields/FormCheckboxField";
import { CreateProductFormData } from "../../hooks/useCreateProductForm";

const productStatusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "discontinued", label: "Discontinued" },
  { value: "out_of_stock", label: "Out of Stock" },
];

type Props = {
  categoryOptions: { value: string; label: string }[];
};

const CreateProductFormUI = ({ categoryOptions }: Props) => {
  const { control } = useFormContext<CreateProductFormData>();

  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Basic Information
          </h2>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <FormTextField
              control={control}
              name="name"
              label="Product Name"
              placeholder="Enter product name"
              required
            />
            <FormTextField
              control={control}
              name="sku"
              label="SKU"
              placeholder="Enter SKU"
              required
            />
            <FormSelectField
              control={control}
              name="type"
              label="Product Type"
              options={categoryOptions}
              placeholder="Select product type"
              required
            />
            <FormSelectField
              control={control}
              name="status"
              label="Status"
              options={productStatusOptions}
              placeholder="Select status"
              required
            />
            <FormTextField
              control={control}
              name="slug"
              label="Slug"
              placeholder="Enter slug"
              required
            />
            <div className="col-span-full">
              <FormTextAreaField
                control={control}
                name="description"
                label="Description"
                placeholder="Enter product description"
                rows={4}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & Inventory */}
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Pricing & Inventory
          </h2>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <FormTextField
              control={control}
              name="price"
              label="Price"
              type="number"
              placeholder="0.00"
              required
            />
            <FormTextField
              control={control}
              name="salePrice"
              label="Sale Price"
              type="number"
              placeholder="0.00"
            />
            <FormTextField
              control={control}
              name="stockQuantity"
              label="Stock Quantity"
              type="number"
              placeholder="0"
            />
            <FormTextField
              control={control}
              name="unit"
              label="Unit"
              placeholder="e.g., piece, kg, m"
            />
            <FormCheckboxField
              control={control}
              name="isFeatured"
              label="Featured Product"
            />
          </div>
        </div>
      </div>

      {/* Physical Properties */}
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Physical Properties
          </h2>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FormTextField
              control={control}
              name="weight"
              label="Weight (kg)"
              type="number"
              placeholder="0.00"
            />
            <FormTextField
              control={control}
              name="length"
              label="Length (cm)"
              type="number"
              placeholder="0.00"
            />
            <FormTextField
              control={control}
              name="width"
              label="Width (cm)"
              type="number"
              placeholder="0.00"
            />
            <FormTextField
              control={control}
              name="height"
              label="Height (cm)"
              type="number"
              placeholder="0.00"
            />
            <FormTextField
              control={control}
              name="material"
              label="Material"
              placeholder="Enter material"
            />
            <FormTextField
              control={control}
              name="finish"
              label="Finish"
              placeholder="Enter finish"
            />
            <FormTextField
              control={control}
              name="color"
              label="Color"
              placeholder="Enter color"
            />
          </div>
        </div>
      </div>

      {/* SEO & Meta */}
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            SEO & Meta Information
          </h2>
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <FormTextField
              control={control}
              name="metaTitle"
              label="Meta Title"
              placeholder="Enter meta title"
            />
            <div className="col-span-full">
              <FormTextAreaField
                control={control}
                name="metaDescription"
                label="Meta Description"
                placeholder="Enter meta description"
                rows={3}
              />
            </div>
            <div className="col-span-full">
              <FormTextField
                control={control}
                name="keywords"
                label="Keywords"
                placeholder="Enter keywords separated by commas"
                hint="Please enter keywords separated by commas"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProductFormUI;

