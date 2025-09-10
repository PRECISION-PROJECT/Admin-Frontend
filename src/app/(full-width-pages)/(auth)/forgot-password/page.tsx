import ForgotPasswordPage from "@/modules/forgot-password";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "This is Password Reset",
};

export default function ForgotPassword() {
  return <ForgotPasswordPage />;
}
