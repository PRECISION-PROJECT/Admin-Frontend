import { Order } from "@/api/orders/response.dto";
import { AugmentedColumnDef } from "@/components/tables/BaseTables";
import { formatDate } from "@/utils";
import React from "react";

export const columns = (): AugmentedColumnDef<Order>[] => [
  {
    accessorKey: "id",
    header: "ID",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.id}</>;
    },
  },
  {
    accessorKey: "orderNumber",
    header: "Order Number",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.orderNumber || "-"}</>;
    },
  },
  {
    accessorKey: "user",
    header: "Customer",
    cell: (props) => {
      const row = props.row.original;
      return (
        <div>
          {row.user ? (
            <div>
              <div className="font-medium">
                {row.user.firstName} {row.user.lastName}
              </div>
              <div className="text-sm text-gray-500">{row.user.email}</div>
            </div>
          ) : (
            <span className="text-gray-400">-</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "products",
    header: "Number of Products",
    cell: (props) => {
      const row = props.row.original;
      return <>{row.products?.length || 0}</>;
    },
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: (props) => {
      const row = props.row.original;
      return (
        <div className="font-medium">
          ${row.total || "0.00"}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (props) => {
      const row = props.row.original;
      const statusColors = {
        draft: "bg-gray-100 text-gray-800",
        pending: "bg-yellow-100 text-yellow-800",
        confirmed: "bg-blue-100 text-blue-800",
        in_production: "bg-purple-100 text-purple-800",
        processing: "bg-orange-100 text-orange-800",
        shipped: "bg-cyan-100 text-cyan-800",
        delivered: "bg-green-100 text-green-800",
        cancelled: "bg-red-100 text-red-800",
      };
      
      const statusColor = statusColors[row.status as keyof typeof statusColors] || "bg-gray-100 text-gray-800";
      
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
          {row.status?.replace("_", " ").toUpperCase() || "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: (props) => {
      const row = props.row.original;
      const paymentColors = {
        pending: "bg-yellow-100 text-yellow-800",
        paid: "bg-green-100 text-green-800",
        failed: "bg-red-100 text-red-800",
        refunded: "bg-gray-100 text-gray-800",
      };
      
      const paymentColor = paymentColors[row.paymentStatus as keyof typeof paymentColors] || "bg-gray-100 text-gray-800";
      
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${paymentColor}`}>
          {row.paymentStatus?.toUpperCase() || "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "deliveryAddress",
    header: "Delivery Address",
    cell: (props) => {
      const row = props.row.original;
      return (
        <div className="max-w-xs truncate">
          {row.deliveryAddress || "-"}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: (props) => {
      const row = props.row.original;
      return <>{formatDate(row.createdAt)}</>;
    },
  },
];
