"use client";

import { IUserResponse } from "@/apis/auths";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/ui/modal";
import React, { useState } from "react";

type Props = {
  type: "active" | "un-active";
  open: boolean;
  currentRow: IUserResponse;
  isLoading: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const UserAccountActiveDialog = ({
  type,
  currentRow,
  open,
  isLoading,
  onClose,
  onSubmit,
}: Props) => {
  const [value, setValue] = useState("");

  return (
    <Modal
      title={type === "active" ? "Activate User?" : "Deactivate User?"}
      description="This action cannot be undone."
      isOpen={open}
      onClose={onClose}
    >
      <div className="space-y-4">
        <p className="mb-2">
          <span className="text-sm inline-block">Are you sure you want to</span>{" "}
          {type === "active" ? "activate" : "deactivate"}{" "}
          <span className="font-bold text-sm inline-block">
            {currentRow.firstName}
          </span>
          ?
          <br />
          <span className="text-sm inline-block">
            This action will {type === "active" ? "activate" : "deactivate"} the
            user with the role of
          </span>{" "}
          <span className="font-bold text-sm inline-block">
            {currentRow.role.toUpperCase()}
          </span>{" "}
          <span className="text-sm inline-block">from the system</span>
        </p>

        <div className="flex items-center space-x-2">
          <Label className="items-start text-sm">First Name:</Label>
          <Input
            containerClassName="flex-1"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`Enter first name to confirm ${
              type === "active" ? "activation" : "deactivation"
            }.`}
          />
        </div>

        <div className="flex w-full items-center justify-end space-x-2 pt-6">
          <Button disabled={isLoading} variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            disabled={isLoading || value !== currentRow.firstName}
            variant="destructive"
            onClick={onSubmit}
          >
            Continue
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default UserAccountActiveDialog;
