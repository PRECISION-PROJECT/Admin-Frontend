"use client";

import { toast } from "sonner";
import Alert from "@/components/ui/alert/Alert";

export default function SonnerTest() {
  const showSuccessToast = () => {
    toast.success("Success! Action completed successfully", {
      description: "Your data has been saved and processed.",
      duration: 4000,
    });
  };

  const showErrorToast = () => {
    toast.error("Error! Something went wrong", {
      description: "Please check your input and try again.",
      duration: 5000,
    });
  };

  const showWarningToast = () => {
    toast.warning("Warning! Please be careful", {
      description: "This action cannot be undone.",
      duration: 4000,
    });
  };

  const showInfoToast = () => {
    toast.info("Information", {
      description: "Here's some useful information for you.",
      duration: 3000,
    });
  };

  const showLoadingToast = () => {
    const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast.promise(promise, {
      loading: "Loading...",
      success: "Data loaded successfully!",
      error: "Failed to load data",
    });
  };

  const showCustomToast = () => {
    toast("Custom Toast", {
      description: "This is a custom toast with action buttons",
      action: {
        label: "Undo",
        onClick: () => toast.info("Undo clicked!"),
      },
      cancel: {
        label: "Cancel",
        onClick: () => toast.error("Cancelled"),
      },
    });
  };

  return (
    <div className="space-y-8 p-6">
      <div>
        <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
          Sonner Toast Test
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Click the buttons below to test different types of Sonner toasts:
        </p>
        
        <div className="flex flex-wrap gap-3">
          <button
            onClick={showSuccessToast}
            className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-success-500 hover:bg-success-600"
          >
            Success Toast
          </button>
          
          <button
            onClick={showErrorToast}
            className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-error-500 hover:bg-error-600"
          >
            Error Toast
          </button>
          
          <button
            onClick={showWarningToast}
            className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-warning-500 hover:bg-warning-600"
          >
            Warning Toast
          </button>
          
          <button
            onClick={showInfoToast}
            className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-blue-light-500 hover:bg-blue-light-600"
          >
            Info Toast
          </button>
          
          <button
            onClick={showLoadingToast}
            className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-gray-500 hover:bg-gray-600"
          >
            Loading Toast
          </button>
          
          <button
            onClick={showCustomToast}
            className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-brand-500 hover:bg-brand-600"
          >
            Custom Toast
          </button>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
          Alert Component Comparison
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          These are the existing Alert components for comparison:
        </p>
        
        <div className="space-y-4">
          <Alert
            variant="success"
            title="Success Alert"
            message="This is a success alert using the existing Alert component."
            showLink={true}
            linkHref="#"
            linkText="Learn more"
          />
          
          <Alert
            variant="error"
            title="Error Alert"
            message="This is an error alert using the existing Alert component."
            showLink={false}
          />
          
          <Alert
            variant="warning"
            title="Warning Alert"
            message="This is a warning alert using the existing Alert component."
            showLink={true}
            linkHref="#"
            linkText="Read more"
          />
          
          <Alert
            variant="info"
            title="Info Alert"
            message="This is an info alert using the existing Alert component."
            showLink={false}
          />
        </div>
      </div>
    </div>
  );
}

