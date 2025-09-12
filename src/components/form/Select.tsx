import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  value?: string;
  defaultValue?: string;
  error?: boolean;
  hint?: string;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
  className = "",
  defaultValue,
  value,
  error = false,
  hint,
  disabled = false,
}) => {
  const selectedValue = value ?? defaultValue;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  const baseClasses =
    "h-11 w-full appearance-none rounded-lg border px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:placeholder:text-white/30";
  const colorClasses = error
    ? "border-error-500 text-gray-400 focus:border-error-500 focus:ring-3 focus:ring-error-500/10 dark:border-error-500 dark:text-error-400"
    : selectedValue
    ? "border-gray-300 text-gray-800 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:text-white/90"
    : "border-gray-300 text-gray-400 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:text-gray-400";

  return (
    <div className="relative">
      <select
        className={`${baseClasses} ${colorClasses} ${className}`}
        value={selectedValue}
        onChange={handleChange}
        disabled={disabled}
      >
        {/* Placeholder option */}
        {placeholder && (
          <option
            value=""
            disabled
            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
          >
            {placeholder}
          </option>
        )}
        {/* Map over options */}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
          >
            {option.label}
          </option>
        ))}
      </select>
      {hint && (
        <p
          className={`mt-1.5 text-xs ${
            error ? "text-error-500" : "text-gray-500"
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

export default Select;
