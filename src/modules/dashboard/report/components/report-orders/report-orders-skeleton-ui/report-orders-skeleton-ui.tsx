import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};

const ReportOrdersSkeletonUI = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-3xs" />
        <Skeleton className="h-10 w-3xs" />

        {/* Date Range Picker Skeleton */}
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-10 w-[140px]" />
          <Skeleton className="h-10 w-[140px]" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Orders Metrics Grid Skeleton */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-16" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-18" />
              <Skeleton className="h-6 w-16" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-6 w-12" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-18" />
              <Skeleton className="h-6 w-8" />
            </div>
            <div className="col-span-2 space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>

          {/* Chart Skeleton */}
          <div className="h-[200px] flex items-center justify-center border rounded">
            <div className="text-center space-y-2">
              <Skeleton className="h-4 w-36 mx-auto" />
              <Skeleton className="h-4 w-28 mx-auto" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportOrdersSkeletonUI;
