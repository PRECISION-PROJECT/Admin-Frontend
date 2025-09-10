"use client";
import FormTextField from "@/components/form/form-fields/FormTextField";
import Button from "@/components/ui/button/Button";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { ResetPasswordFormData } from "../../hooks/validation";

const ResetPasswordFormUI = () => {
  const { control } = useFormContext<ResetPasswordFormData>();

  return (
    <div className="space-y-5">
      <FormTextField
        control={control}
        name="newPassword"
        label="New Password"
        type="password"
        placeholder="Enter your new password"
        showPasswordToggle
        required
      />
      <FormTextField
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="Confirm your new password"
        showPasswordToggle
        required
      />
      <div>
        <Button className="w-full" size="sm" type="submit">
          Reset Password
        </Button>
      </div>
    </div>
  );
};

export default ResetPasswordFormUI;
