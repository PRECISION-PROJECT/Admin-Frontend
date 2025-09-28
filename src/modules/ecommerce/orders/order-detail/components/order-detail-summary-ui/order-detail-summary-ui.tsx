import { Category } from "@/apis/categories";
import { IOrder } from "@/apis/orders/types";
import { Icons } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageLoader from "@/components/ui/image-loader";
import { Separator } from "@/components/ui/separator";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { formatCurrencyUSD } from "@/utils/common";
import { format } from "date-fns";
import React from "react";

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

type Props = {
  order: IOrder;
};

const OrderDetailSummaryInfoUI = ({ order }: Props) => {
  const paymentStatus = order.paymentStatus ?? "";
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Order Details */}
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Order ID
              </h3>
              <p className="text-sm font-mono">{order.id}</p>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Order Number
              </h3>
              <p className="text-sm font-semibold">{order.orderNumber}</p>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Status
              </h3>
              <Badge className={getStatusColor(order.status)}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </Badge>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Notes
              </h3>
              <p className="text-sm">{order.notes}</p>
            </div>
          </div>

          {/* Middle Column - Pricing */}
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Subtotal
              </h3>
              <p className="text-sm">
                {formatCurrencyUSD(order.subtotal ?? 0)}
              </p>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Tax Amount
              </h3>
              <p className="text-sm">
                {formatCurrencyUSD(order.taxAmount ?? 0)}
              </p>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Shipping Fee
              </h3>
              <p className="text-sm">
                {formatCurrencyUSD(order.shippingFee ?? 0)}
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Total
              </h3>
              <p className="text-lg font-bold">
                {formatCurrencyUSD(order.total ?? 0)}
              </p>
            </div>
          </div>

          {/* Right Column - Payment & Delivery */}
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Payment Method
              </h3>
              <div className="flex items-center gap-2">
                <Icons.creditCard className="h-4 w-4" />
                <span className="text-sm">{order.paymentMethod}</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Payment Status
              </h3>
              <Badge className={getPaymentStatusColor(paymentStatus)}>
                {paymentStatus.charAt(0).toUpperCase() + paymentStatus.slice(1)}
              </Badge>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Estimated Delivery
              </h3>
              <div className="flex items-center gap-2">
                <Icons.truck className="h-4 w-4" />
                <span className="text-sm">
                  {order.estimatedDeliveryDate
                    ? format(
                        order.estimatedDeliveryDate as string,
                        "dd/MM/yyyy HH:mm:ss"
                      )
                    : "-"}
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Created At
              </h3>
              <p className="text-sm">
                {order.createdAt
                  ? format(order.createdAt as string, "dd/MM/yyyy HH:mm:ss")
                  : "-"}
              </p>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Updated At
              </h3>
              <p className="text-sm">
                {order.updatedAt
                  ? format(order.updatedAt as string, "dd/MM/yyyy HH:mm:ss")
                  : "-"}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderDetailSummaryInfoUI;
