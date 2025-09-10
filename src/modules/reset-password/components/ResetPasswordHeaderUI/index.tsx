import React from "react";

interface ResetPasswordHeaderUIProps {
  email: string;
}

const ResetPasswordHeaderUI = ({ email }: ResetPasswordHeaderUIProps) => {
  return (
    <div className="mb-5 sm:mb-8">
      <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
        Reset Your Password
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Enter your new password for{" "}
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {email}
        </span>
      </p>
    </div>
  );
};

export default ResetPasswordHeaderUI;
