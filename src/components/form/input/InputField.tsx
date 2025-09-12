"use client";

import EyeCloseIcon from "@/icons/eye-close.svg";
import EyeIcon from "@/icons/eye.svg";
import { cn } from "@/utils/cn";
import type React from "react";
import type { FC, InputHTMLAttributes } from "react";
import { useState } from "react";

type InputProps = {
  type?: "text" | "number" | "email" | "password" | "date" | "time" | string;
  id?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  min?: string;
  max?: string;
  step?: number;
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  hint?: string;
  showPasswordToggle?: boolean;
  parentClassName?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  numericOnly?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({
  type = "text",
  id,
  name,
  placeholder,
  defaultValue,
  onChange,
  className = "",
  min,
  max,
  step,
  disabled = false,
  success = false,
  error = false,
  hint,
  showPasswordToggle = false,
  parentClassName = "",
  prefix,
  suffix,
  numericOnly = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Base input classes
  let inputClasses = `h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${className}`;

  // Add styles for different states
  if (disabled) {
    inputClasses += ` text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700`;
  } else if (error) {
    inputClasses += ` border-error-500 focus:border-error-300 focus:ring-error-500/20 dark:text-error-400 dark:border-error-500 dark:focus:border-error-800`;
  } else if (success) {
    inputClasses += ` border-success-500 focus:border-success-300 focus:ring-success-500/20 dark:text-success-400 dark:border-success-500 dark:focus:border-success-800`;
  } else {
    inputClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90 dark:focus:border-brand-800`;
  }

  // Determine input type for password toggle
  const inputType =
    showPasswordToggle && type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  // Handle numeric only input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (numericOnly) {
      const { value } = e.target;
      if (!/^[0-9]*\.?[0-9]*$/.test(value) && value !== "") return;
    }
    onChange?.(e);
  };

  // Determine suffix content (password toggle or custom suffix)
  const suffixContent =
    showPasswordToggle && type === "password" ? (
      <span
        onClick={() => setShowPassword(!showPassword)}
        className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
      >
        {showPassword ? (
          <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
        ) : (
          <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
        )}
      </span>
    ) : suffix ? (
      <span className="absolute right-3 top-[10px] text-gray-500">
        {suffix}
      </span>
    ) : null;

  return (
    <div className={cn("relative", parentClassName)}>
      <div>
        {/* Optional Prefix */}
        {prefix && (
          <span className="absolute left-3 top-[10px] text-gray-500">
            {prefix}
          </span>
        )}

        <input
          type={inputType}
          id={id}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className={cn(
            inputClasses,
            suffix ? "pr-8" : "",
            prefix ? "pl-8" : ""
          )}
          onWheel={(e) => e.currentTarget.blur()}
          {...props}
        />

        {/* Optional Suffix */}
        {suffixContent}
      </div>

      {/* Optional Hint Text */}
      {hint && (
        <p
          className={cn(
            "mt-1.5 text-xs",
            error
              ? "text-error-500"
              : success
              ? "text-success-500"
              : "text-gray-500"
          )}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

export default Input;
