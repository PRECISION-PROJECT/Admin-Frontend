import FormSelectField from "@/components/form/form-fields/FormSelectField";
import FormTextField from "@/components/form/form-fields/FormTextField";
import React from "react";
import { useFormContext } from "react-hook-form";

const isActiveOptions = [
  {
    value: "",
    label: "All",
  },
  {
    value: "true",
    label: "Active",
  },
  {
    value: "false",
    label: "Inactive",
  },
];

const CategoryFilterFormUI = () => {
  const { control } = useFormContext();
  return (
    <>
      <FormTextField
        control={control}
        name="search"
        label="Search"
        placeholder="Search by name, description"
      />
      <FormTextField
        control={control}
        name="parentId"
        label="Parent ID"
        placeholder="Enter parent category ID"
      />
      <FormSelectField
        control={control}
        name="isActive"
        label="Status"
        options={isActiveOptions}
        placeholder="Select status"
      />
    </>
  );
};

export default CategoryFilterFormUI;
