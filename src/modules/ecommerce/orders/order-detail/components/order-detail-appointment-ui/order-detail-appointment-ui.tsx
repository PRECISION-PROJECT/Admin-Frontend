"use client";

import { IOrder } from "@/apis/orders/types";
import { Icons } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

type Props = {
  order: IOrder;
};

const OrderDetailAppointmentUI = ({ order }: Props) => {
  const status = order?.appointment?.status ?? "-";
  return (
    <Card>
      <CardHeader>
        <CardTitle>Related Appointment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Appointment ID
              </h4>
              <p className="text-sm font-mono">
                {order?.appointment?.id ?? "-"}
              </p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Service Type
              </h4>
              <p className="text-sm capitalize">
                {order?.appointment?.serviceType ?? "-"}
              </p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Status
              </h4>
              <Badge
                variant="default"
                className={
                  status?.toLowerCase() === "completed"
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-500 hover:bg-blue-600"
                }
              >
                {status?.charAt(0).toUpperCase() + status?.slice(1)}
              </Badge>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Customer Name
              </h4>
              <p className="text-sm">
                {order?.appointment?.customerName ?? "-"}
              </p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Contact Information
              </h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Icons.phone className="h-4 w-4" />
                  <span className="text-sm">
                    {order?.appointment?.customerPhone ?? "-"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icons.mail className="h-4 w-4" />
                  <span className="text-sm">
                    {order?.appointment?.customerEmail ?? "-"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Appointment Date & Time
              </h4>
              <div className="flex items-center gap-2">
                <Icons.calendar className="h-4 w-4" />
                <span className="text-sm">
                  {order?.appointment?.dateTime
                    ? format(order?.appointment?.dateTime, "dd/MM/yyyy HH:mm:ss")
                    : "-"}
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Estimated Duration
              </h4>
              <p className="text-sm">
                {order?.appointment?.estimatedDuration ?? "-"} minutes
              </p>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Service Address
              </h4>
              <div className="flex items-start gap-2">
                <Icons.mapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">
                  {order?.appointment?.serviceAddress ?? "-"}
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-sm text-muted-foreground mb-1">
                Appointment Notes
              </h4>
              <p className="text-sm">{order?.appointment?.notes ?? "-"}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderDetailAppointmentUI;
