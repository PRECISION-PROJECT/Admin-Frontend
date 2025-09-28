"use client";

import { IUserResponse } from "@/apis/auths";
import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UsersDialogType } from "../../contexts/user-account-context";

import { useRouter } from "next/navigation";

interface CellActionProps {
  data: IUserResponse;
  onRowClick: (row: IUserResponse, type: UsersDialogType) => void;
}

export const CellAction: React.FC<CellActionProps> = ({ data, onRowClick }) => {
  const router = useRouter();

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <Icons.dotsVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/product/${data.id}`)}
          >
            <Icons.edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onRowClick(data, "active")}>
            <Icons.check className="mr-2 h-4 w-4" /> Active
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onRowClick(data, "un-active")}>
            <Icons.x className="mr-2 h-4 w-4" /> UnActive
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onRowClick(data, "delete")}>
            <Icons.trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
