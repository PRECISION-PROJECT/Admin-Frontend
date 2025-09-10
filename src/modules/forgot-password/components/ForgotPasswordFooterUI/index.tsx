import Link from "next/link";
import React from "react";

const ForgotPasswordFooterUI = () => {
  return (
    <div className="mt-5">
      <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
        Wait, I remember my password...{" "}
        <Link
          href="/signin"
          className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
        >
          Click here
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordFooterUI;
