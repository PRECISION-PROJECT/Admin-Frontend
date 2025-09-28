import { ForgotPasswordModule } from "@/modules/auth";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "This is Password Reset",
};

const ForgotPasswordPage = () => {
  return <ForgotPasswordModule />;
};

export default ForgotPasswordPage;
