import FormDatePickerField from "@/components/form/form-fields/FormDatePickerField";
import FormSelectField from "@/components/form/form-fields/FormSelectField";
import FormTextField from "@/components/form/form-fields/FormTextField";
import React from "react";
import { useFormContext } from "react-hook-form";

const statusOptions = [
  {
    value: "1",
    label: "Active",
  },
  {
    value: "0",
    label: "Inactive",
  },
];

const UserAccountFilterFormUI = () => {
  const { control } = useFormContext();
  return (
    <>
      <FormTextField
        control={control}
        name="search"
        label="Search"
        placeholder="Search by ID, Username, Address"
      />
      <FormSelectField
        control={control}
        name="status"
        label="Status"
        options={statusOptions}
      />
      <FormDatePickerField
        control={control}
        name="startDate"
        label="Start Date"
        placeholder="Select Start Date"
      />
      <FormDatePickerField
        control={control}
        name="endDate"
        label="End Date"
        placeholder="Select End Date"
      />
    </>
  );
};

export default UserAccountFilterFormUI;
