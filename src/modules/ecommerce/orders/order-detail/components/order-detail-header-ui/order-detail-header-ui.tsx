"use client";
import { IOrder } from "@/apis/orders/types";
import { Icons } from "@/assets/icons";
import { Heading } from "@/components/shared/heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/routes";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  order: IOrder;
};

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

const OrderDetailHeaderUI = ({ order }: Props) => {
  const router = useRouter();
  const id = order?.id;
  const paymentStatus = order?.paymentStatus ?? "";
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <div className="flex items-end gap-x-2.5">
          <Heading title="Order Detail" description={`Order ID: ${id}`} />
          <Badge variant="default" className={getStatusColor(order.status)}>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </Badge>
          <Badge
            variant="default"
            className={getPaymentStatusColor(paymentStatus)}
          >
            {paymentStatus.charAt(0).toUpperCase() + paymentStatus.slice(1)}
          </Badge>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Icons.calendar className="h-4 w-4" />
            {order.createdAt
              ? format(order.createdAt as string, "dd/MM/yyyy")
              : "-"}
          </span>
          <span className="flex items-center gap-1">
            <Icons.package className="h-4 w-4" />
            {order.products.length} items
          </span>
        </div>
      </div>

      <Button
        size="default"
        className="space-x-1"
        onClick={() => router.push(ROUTES.ORDER_DETAIL.replace(":id", id))}
      >
        <Icons.edit size={18} /> <span>Edit Order</span>
      </Button>
    </div>
  );
};

export default OrderDetailHeaderUI;
