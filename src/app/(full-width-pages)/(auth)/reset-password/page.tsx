import ResetPasswordPage from "@/modules/reset-password";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "This is Password Reset",
};

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const email = params.email;

  // Server-side check: redirect to home if no email
  if (!email || typeof email !== "string") {
    redirect("/");
  }

  return <ResetPasswordPage email={email} />;
}
