"use client";

import { IAppointment } from "@/apis/appointments";
import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AppointmentsDialogType } from "../../contexts/appointments-list-context";

interface CellActionProps {
  data: IAppointment;
  onRowClick: (row: IAppointment, type: AppointmentsDialogType) => void;
}

export const CellAction: React.FC<CellActionProps> = ({ data, onRowClick }) => {
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
          <DropdownMenuItem onClick={() => onRowClick(data, "view")}>
            <Icons.view className="mr-1 h-4 w-4" /> View Detail
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
