import {
  GetReportRevenueResponse,
  GetReportUsersResponse,
} from "@/apis/reports";
import { CardContent } from "@/components/ui/card";
import { formatCurrencyUSD } from "@/utils/common";
import React from "react";

type Props = {
  data?: GetReportUsersResponse;
};

const ReportUsersContentUI = ({ data }: Props) => {
  return (
    <CardContent>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Total Users</p>
            <p className="text-lg font-semibold">{data?.totalUsers ?? 0}</p>
          </div>
          <div>
            <p className="text-muted-foreground">New Users This Month</p>
            <p className="text-lg font-semibold text-green-600">
              {data?.newUsersThisMonth ?? 0}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Active Users</p>
            <p className="text-lg font-semibold text-blue-600">
              {data?.activeUsers ?? 0}
            </p>
          </div>
        </div>

        {/* Charts  */}
      </div>
    </CardContent>
  );
};

export default ReportUsersContentUI;
