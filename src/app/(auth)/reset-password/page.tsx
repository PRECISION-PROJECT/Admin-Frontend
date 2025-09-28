import { ResetPasswordModule } from "@/modules/auth";
import { ROUTES } from "@/utils/routes";
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
  const hash = params.hash;

  // Server-side check: redirect to home if no email
  if (
    !email ||
    typeof email !== "string" ||
    !hash ||
    typeof hash !== "string"
  ) {
    redirect(ROUTES.SIGN_IN);
  }

  return <ResetPasswordModule email={email} hash={hash} />;
}
