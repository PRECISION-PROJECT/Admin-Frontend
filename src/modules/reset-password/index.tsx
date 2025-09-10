import React from "react";
import ResetPasswordContainer from "./containers/ResetPasswordContainer/ResetPasswordContainer";

interface ResetPasswordPageProps {
  email: string;
}

const ResetPasswordPage = ({ email }: ResetPasswordPageProps) => {
  return <ResetPasswordContainer email={email} />;
};

export default ResetPasswordPage;
