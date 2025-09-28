import { SignInModule } from "@/modules/auth";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign In",
  description: "This is Sign In Page",
};

const SignInPage = () => {
  return <SignInModule />;
};

export default SignInPage;
