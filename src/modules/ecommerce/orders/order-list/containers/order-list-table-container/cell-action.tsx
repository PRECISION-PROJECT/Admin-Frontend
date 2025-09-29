"use client";

import { IOrder } from "@/apis/orders/types";
import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROUTES } from "@/utils/routes";

import { useRouter } from "next/navigation";

interface CellActionProps {
  data: IOrder;
  onRowClick: (row: IOrder) => void;
}

export const CellAction: React.FC<CellActionProps> = ({ onRowClick, data }) => {
  const router = useRouter();
  const detailUrl = ROUTES.ORDER_DETAIL.replace(":id", data.id);

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
          <DropdownMenuItem onClick={() => router.push(detailUrl)}>
            <Icons.view className="mr-2 h-4 w-4" /> Detail
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={data.status === "delivered"}
            onClick={() => onRowClick(data)}
          >
            <Icons.edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
