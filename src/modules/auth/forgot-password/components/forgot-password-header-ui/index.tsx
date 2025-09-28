import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const ForgotPasswordHeaderUI = () => {
  return (
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-bold">Forgot Password</CardTitle>
      <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
        Enter your registered email and we will send you a link to reset your
        password.
      </CardDescription>
    </CardHeader>
  );
};

export default ForgotPasswordHeaderUI;
