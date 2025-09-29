import { GetReportDashboardResponse } from "@/apis/reports";
import { Icons } from "@/assets/icons";
import { Heading } from "@/components/shared/heading";
import { CardContent } from "@/components/ui/card";
import { formatCurrencyUSD } from "@/utils/common";
import React from "react";

type Props = {
  data?: GetReportDashboardResponse;
};

const ReportDashboardContentUI = ({ data }: Props) => {
  return (
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex items-center space-x-2">
          <Icons.dollarSign className="h-8 w-8 text-green-600" />
          <div>
            <p className="text-sm text-muted-foreground">Total Revenue</p>
            <p className="text-2xl font-bold">
              {formatCurrencyUSD(data?.revenue?.totalRevenue ?? 0)}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Icons.shoppingCart className="h-8 w-8 text-blue-600" />
          <div>
            <p className="text-sm text-muted-foreground">Total Orders</p>
            <p className="text-2xl font-bold">
              {data?.orders?.totalOrders ?? 0}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Icons.userCircle className="h-8 w-8 text-purple-600" />
          <div>
            <p className="text-sm text-muted-foreground">Active Users</p>
            <p className="text-2xl font-bold">
              {data?.users?.activeUsers ?? 0}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Icons.package className="h-8 w-8 text-orange-600" />
          <div>
            <p className="text-sm text-muted-foreground">Total Products</p>
            <p className="text-2xl font-bold">
              {data?.products?.totalProducts ?? 0}
            </p>
          </div>
        </div>
      </div>
    </CardContent>
  );
};

export default ReportDashboardContentUI;
