"use client";
import { Icons } from "@/assets/icons";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/ui/button";
import { useUserAccount } from "../../contexts/user-account-context";
import Link from "next/link";
import React from "react";

const UserAccountHeaderUI = () => {
  const { setOpen } = useUserAccount();
  return (
    <div className="flex items-start justify-between">
      <Heading
        title="User Accounts"
        description="Manage the client user accounts"
      />
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="space-x-1"
          onClick={() => setOpen("invite")}
          size="default"
        >
          <span>Invite User</span> <Icons.mailPlusIcon size={18} />
        </Button>
        <Button
          size="default"
          className="space-x-1"
          onClick={() => setOpen("add")}
        >
          <span>Add User</span> <Icons.userPlusIcon size={18} />
        </Button>
      </div>
    </div>
  );
};

export default UserAccountHeaderUI;
