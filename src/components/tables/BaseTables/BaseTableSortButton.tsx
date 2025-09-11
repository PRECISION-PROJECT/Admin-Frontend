import React from "react";
import { AngleDownIcon, AngleUpIcon } from "@/icons";
import { cn } from "@/utils/cn";

type BaseTableSortButtonProps = {
  sortDirection: "asc" | "desc" | false;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const BaseTableSortButton: React.FC<BaseTableSortButtonProps> = ({ 
  sortDirection, 
  onClick, 
  disabled = false,
  className
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex flex-col gap-0.5 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      <AngleUpIcon
        className={cn(
          "text-gray-300 dark:text-gray-700",
          sortDirection === "asc" && "text-brand-500"
        )}
      />
      <AngleDownIcon
        className={cn(
          "text-gray-300 dark:text-gray-700",
          sortDirection === "desc" && "text-brand-500"
        )}
      />
    </button>
  );
};

export default BaseTableSortButton;
