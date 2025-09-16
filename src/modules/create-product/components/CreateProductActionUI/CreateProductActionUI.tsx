import React from "react";
import Button from "@/components/ui/button/Button";

type Props = {
  isLoading: boolean;
  onSaveDraft: () => void;
  onSubmit: () => void;
};

const CreateProductActionUI = ({ isLoading, onSaveDraft, onSubmit }: Props) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
      <Button 
        variant="outline" 
        onClick={onSaveDraft}
        disabled={isLoading}
      >
        Save as Draft
      </Button>
      <Button 
        variant="primary" 
        onClick={onSubmit}
        disabled={isLoading}
      >
        {isLoading ? "Creating..." : "Create Product"}
      </Button>
    </div>
  );
};

export default CreateProductActionUI;

