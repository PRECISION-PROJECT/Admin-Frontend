"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { TextField } from "@/components/form-field";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ResetPasswordFormData } from "../../hooks";
import { ROUTES } from "@/utils/routes";

const ResetPasswordFormUI = ({ isLoading }: { isLoading: boolean }) => {
  const { control } = useFormContext<ResetPasswordFormData>();

  return (
    <div className="space-y-4">
      <TextField
        control={control}
        name="newPassword"
        label="New Password"
        type="password"
        placeholder="Enter your new password"
        required
      />

      <TextField
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        placeholder="Confirm your new password"
        required
      />

      <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
        Reset Password
      </Button>
      <div className="text-center">
        <Link
          href={ROUTES.SIGN_IN}
          className="text-sm text-muted-foreground hover:text-primary underline"
        >
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordFormUI;
