import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type Props = {
  email: string;
};

const ResetPasswordHeaderUI = ({ email }: Props) => {
  return (
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-bold">Reset Your Password</CardTitle>
      <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
        Enter your new password for{" "}
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {email}
        </span>
      </CardDescription>
    </CardHeader>
  );
};

export default ResetPasswordHeaderUI;
