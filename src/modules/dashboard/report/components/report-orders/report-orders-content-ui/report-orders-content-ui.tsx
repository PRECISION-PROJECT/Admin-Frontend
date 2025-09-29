import { GetReportOrdersResponse } from "@/apis/reports";
import { CardContent } from "@/components/ui/card";
import React from "react";

type Props = {
  data?: GetReportOrdersResponse;
};

const ReportOrdersContentUI = ({ data }: Props) => {
  return (
    <CardContent>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Total Orders</p>
            <p className="text-lg font-semibold">{data?.totalOrders ?? 0}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Completed</p>
            <p className="text-lg font-semibold text-green-600">
              {data?.completedOrders ?? 0}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Pending</p>
            <p className="text-lg font-semibold text-yellow-600">
              {data?.pendingOrders ?? 0}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Cancelled</p>
            <p className="text-lg font-semibold text-red-600">
              {data?.cancelledOrders ?? 0}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-muted-foreground">Average Order Value</p>
            <p className="text-lg font-semibold">
              ${data?.averageOrderValue ?? 0}
            </p>
          </div>
        </div>

        {/* Charts  */}
      </div>
    </CardContent>
  );
};

export default ReportOrdersContentUI;
