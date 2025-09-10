import React from "react";

const ForgotPasswordHeaderUI = () => {
  return (
    <div className="mb-5 sm:mb-8">
      <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
        Forgot Your Password?
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Enter the email address linked to your account, and we&apos;ll send you
        a link to reset your password.
      </p>
    </div>
  );
};

export default ForgotPasswordHeaderUI;
