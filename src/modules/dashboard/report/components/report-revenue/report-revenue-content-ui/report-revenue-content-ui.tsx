import { GetReportRevenueResponse } from "@/apis/reports";
import { CardContent } from "@/components/ui/card";
import { formatCurrencyUSD } from "@/utils/common";
import React from "react";

type Props = {
  data?: GetReportRevenueResponse;
};

const ReportRevenueContentUI = ({ data }: Props) => {
  return (
    <CardContent>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Total Revenue</p>
            <p className="text-lg font-semibold">
              {formatCurrencyUSD(data?.totalRevenue ?? 0)}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Monthly Revenue</p>
            <p className="text-lg font-semibold">
              {formatCurrencyUSD(data?.monthlyRevenue ?? 0)}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Weekly Revenue</p>
            <p className="text-lg font-semibold">
              {formatCurrencyUSD(data?.weeklyRevenue ?? 0)}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Daily Revenue</p>
            <p className="text-lg font-semibold">
              {formatCurrencyUSD(data?.dailyRevenue ?? 0)}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Avg Order Value</p>
            <p className="text-lg font-semibold">
              {formatCurrencyUSD(data?.averageOrderValue ?? 0)}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Total Orders</p>
            <p className="text-lg font-semibold">{data?.totalOrders ?? 0}</p>
          </div>
        </div>

        {/* Charts  */}
      </div>
    </CardContent>
  );
};

export default ReportRevenueContentUI;
