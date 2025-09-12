import Button from "@/components/ui/button/Button";
import React from "react";

type Props = {
  onClear: () => void;
};

const UserAccountFilterActionUI = ({ onClear }: Props) => {
  return (
    <div className="flex justify-between items-center col-span-4">
      <div>
        <Button type="submit" size="sm" variant="primary">
          Apply Filter
        </Button>
        <Button
          type="button"
          onClick={onClear}
          size="sm"
          variant="outline"
          className="ml-4"
        >
          Clear Filter
        </Button>
      </div>
    </div>
  );
};

export default UserAccountFilterActionUI;
