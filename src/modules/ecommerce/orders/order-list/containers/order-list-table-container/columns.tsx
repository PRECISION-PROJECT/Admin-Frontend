"use client";

import { Category } from "@/apis/categories";
import { Icons } from "@/assets/icons";
import { DataTableColumnHeader } from "@/components/shared/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import ImageLoader from "@/components/ui/image-loader";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Column, ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import Image from "next/image";
import { CellAction } from "./cell-action";
import { IOrder } from "@/apis/orders/types";

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "bg-yellow-500 hover:bg-yellow-600";
    case "processing":
      return "bg-blue-500 hover:bg-blue-600";
    case "shipped":
      return "bg-purple-500 hover:bg-purple-600";
    case "delivered":
      return "bg-green-500 hover:bg-green-600";
    case "cancelled":
      return "bg-red-500 hover:bg-red-600";
    default:
      return "bg-gray-500 hover:bg-gray-600";
  }
};

const getPaymentStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "paid":
      return "bg-green-500 hover:bg-green-600";
    case "pending":
      return "bg-yellow-500 hover:bg-yellow-600";
    case "failed":
      return "bg-red-500 hover:bg-red-600";
    default:
      return "bg-gray-500 hover:bg-gray-600";
  }
};

export const columns = (): ColumnDef<IOrder>[] => [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="text-sm cursor-help">{id.slice(0, 8)}...</div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="">{id}</p>
          </TooltipContent>
        </Tooltip>
      );
    },
    enableColumnFilter: true,
  },
  {
    id: "userId",
    accessorKey: "userId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User Id" />
    ),
    cell: ({ row }) => {
      const userId = row.original.userId;
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="font-medium cursor-help">{userId}</div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{userId}</p>
          </TooltipContent>
        </Tooltip>
      );
    },
    meta: {
      label: "User Id",
      placeholder: "Search by user id...",
      variant: "text",
    },
    enableSorting: false,
    enableColumnFilter: true,
  },
  {
    accessorKey: "products",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Number of products" />
    ),
    cell: ({ row }) => {
      const products = row.original.products;
      return (
        <div className="flex items-center space-x-2">
          <span className="text-sm">{products.length}</span>
        </div>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "orderNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Number" />
    ),
    cell: ({ row }) => {
      const orderNumber = row.original.orderNumber;
      return (
        <div className="flex items-center space-x-2">
          <span className="text-sm">{orderNumber}</span>
        </div>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total" />
    ),
    cell: ({ row }) => {
      const total = row.original.total;
      return (
        <div className="flex items-center space-x-2">
          <span className="text-sm">{total}</span>
        </div>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "subtotal",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subtotal" />
    ),
    cell: ({ row }) => {
      const subtotal = row.original.subtotal;
      return (
        <div className="flex items-center space-x-2">
          <span className="text-sm">{subtotal}</span>
        </div>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "taxAmount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tax Amount" />
    ),
    cell: ({ row }) => {
      const taxAmount = row.original.taxAmount;
      return (
        <div className="flex items-center space-x-2">
          <span className="text-sm">{taxAmount}</span>
        </div>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "deliveryAddress",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Delivery Address" />
    ),
    cell: ({ row }) => {
      const deliveryAddress = row.original.deliveryAddress ?? "";
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="text-sm cursor-help">
              {deliveryAddress?.slice(0, 8)}...
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="">{deliveryAddress}</p>
          </TooltipContent>
        </Tooltip>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "deliveryInstructions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Delivery Instructions" />
    ),
    cell: ({ row }) => {
      const deliveryInstructions = row.original.deliveryInstructions ?? "";
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="text-sm cursor-help">
              {deliveryInstructions?.slice(0, 8)}...
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p className="">{deliveryInstructions}</p>
          </TooltipContent>
        </Tooltip>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <div className="flex items-center space-x-2">
          <Badge variant="default" className={getStatusColor(status)}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "paymentMethod",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method" />
    ),
    cell: ({ row }) => {
      const paymentMethod = row.original.paymentMethod;
      return (
        <div className="flex items-center space-x-2">
          <span>{paymentMethod}</span>
        </div>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "paymentStatus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Status" />
    ),
    cell: ({ row }) => {
      const paymentStatus = row.original.paymentStatus ?? "";
      return (
        <div className="flex items-center space-x-2">
          <Badge
            variant="default"
            className={getPaymentStatusColor(paymentStatus)}
          >
            {paymentStatus.charAt(0).toUpperCase() + paymentStatus.slice(1)}
          </Badge>
        </div>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "estimatedDeliveryDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Estimated Delivery Date" />
    ),
    cell: ({ row }) => {
      const estimatedDeliveryDate = row.original.estimatedDeliveryDate;
      return (
        <div className="flex items-center space-x-2">
          <Icons.calendar className="h-4 w-4" />
          <span className="text-sm">
            {estimatedDeliveryDate
              ? format(estimatedDeliveryDate as string, "dd/MM/yyyy HH:mm:ss")
              : "-"}
          </span>
        </div>
      );
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated At" />
    ),
    cell: ({ row }) => {
      const updatedAt = row.original.updatedAt;
      return (
        <div className="flex items-center space-x-2">
          <Icons.calendar className="h-4 w-4" />
          <span className="text-sm">
            {updatedAt ? format(updatedAt as string, "dd/MM/yyyy HH:mm:ss") : "-"}
          </span>
        </div>
      );
    },
    enableColumnFilter: true,
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
