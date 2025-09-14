import FormTextField from "@/components/form/form-fields/FormTextField";
import React from "react";
import { useFormContext } from "react-hook-form";

const AppointmentFilterFormUI = () => {
  const { control } = useFormContext();
  return (
    <div className="flex items-center gap-4">
      <FormTextField
        control={control}
        name="search"
        label="Search"
        placeholder="Search by customer name, email, notes"
      />
      <FormTextField
        control={control}
        name="userId"
        label="User ID"
        placeholder="Enter user ID"
      />
    </div>
  );
};

export default AppointmentFilterFormUI;
