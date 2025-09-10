"use client";
import FormCheckboxField from "@/components/form/form-fields/FormCheckboxField";
import FormTextField from "@/components/form/form-fields/FormTextField";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { SignInFormData } from "../../hooks/validation";

const SigninFormUI = () => {
  const { control } = useFormContext<SignInFormData>();

  return (
    <div className="space-y-6">
      <FormTextField
        control={control}
        name="email"
        label="Email"
        placeholder="info@gmail.com"
        required
      />
      <FormTextField
        control={control}
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        showPasswordToggle
        required
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FormCheckboxField control={control} name="keepLoggedIn" />
          <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
            Keep me logged in
          </span>
        </div>
        <Link
          href="/forgot-password"
          className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
        >
          Forgot password?
        </Link>
      </div>
      <div>
        <Button className="w-full" size="sm" type="submit">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default SigninFormUI;
