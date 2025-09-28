"use client";

import { IOrder } from "@/apis/orders/types";
import { Icons } from "@/assets/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrencyUSD } from "@/utils/common";
import { ROUTES } from "@/utils/routes";
import { format } from "date-fns";
import Link from "next/link";

type Props = {
  order: IOrder;
};

const OrderDetailCustomerUI = ({ order }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                {order?.user?.avatar?.path ? (
                  <img
                    src={order.user.avatar.path || "/placeholder.svg"}
                    alt={`${order?.user?.firstName} ${order?.user?.lastName}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <Icons.userCircle className="h-6 w-6 text-muted-foreground" />
                )}
              </div>
              <div>
                <h3 className="font-semibold">
                  {order?.user?.firstName ?? "-"} {order?.user?.lastName ?? "-"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {order?.user?.role ?? "-"}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Email
              </h4>
              <div className="flex items-center gap-2">
                <Icons.mail className="h-4 w-4" />
                <span className="text-sm">{order?.user?.email ?? "-"}</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Provider
              </h4>
              <p className="text-sm capitalize">
                {order?.user?.provider ?? "-"}
              </p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Social ID
              </h4>
              <p className="text-sm font-mono">
                {order?.user?.socialId ?? "-"}
              </p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                User Since
              </h4>
              <p className="text-sm">
                {order.createdAt ? format(order.createdAt, "dd/MM/yyyy HH:mm:ss") : "-"}
              </p>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Delivery Address
              </h4>
              <div className="flex items-start gap-2">
                <Icons.mapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">{order?.deliveryAddress ?? "-"}</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Delivery Instructions
              </h4>
              <p className="text-sm">{order?.deliveryInstructions ?? "-"}</p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Estimated Delivery
              </h4>
              <div className="flex items-center gap-2">
                <Icons.calendar className="h-4 w-4" />
                <span className="text-sm">
                  {order.estimatedDeliveryDate
                    ? format(order.estimatedDeliveryDate, "dd/MM/yyyy HH:mm:ss")
                    : "-"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderDetailCustomerUI;
