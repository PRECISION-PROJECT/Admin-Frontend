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

interface CellActionProps {
  data: IUserResponse;
  onRowClick: (row: IUserResponse, type: UsersDialogType) => void;
}

export const CellAction: React.FC<CellActionProps> = ({ data, onRowClick }) => {
  const isActive = data.status === "active";

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
            onClick={() => onRowClick(data, isActive ? "un-active" : "active")}
          >
            {!isActive ? (
              <>
                <Icons.check className="mr-2 h-4 w-4" /> Active
              </>
            ) : (
              <>
                <Icons.x className="mr-2 h-4 w-4" /> Deactive
              </>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onRowClick(data, "delete")}>
            <Icons.trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
