"use client";
import FormTextField from "@/components/form/form-fields/FormTextField";
import Button from "@/components/ui/button/Button";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { ForgotPasswordFormData } from "../../hooks/validation";

const ForgotPasswordFormUI = () => {
  const { control } = useFormContext<ForgotPasswordFormData>();

  return (
    <div className="space-y-5">
      <FormTextField
        control={control}
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
      />
      <div>
        <Button className="w-full" size="sm" type="submit">
          Send Reset Link
        </Button>
      </div>
    </div>
  );
};

export default ForgotPasswordFormUI;
