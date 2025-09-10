import Link from "next/link";
import React from "react";

const ResetPasswordFooterUI = () => {
  return (
    <div className="mt-5">
      <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
        Remember your password?{" "}
        <Link
          href="/signin"
          className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default ResetPasswordFooterUI;
