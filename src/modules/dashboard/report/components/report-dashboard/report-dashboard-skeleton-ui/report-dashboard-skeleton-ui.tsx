import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};

const ReportDashboardSkeletonUI = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-3xs" />
        <Skeleton className="h-10 w-3xs" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-8" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-8" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-8" />

            <div className="space-y-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-8" />

            <div className="space-y-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-8 w-24" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportDashboardSkeletonUI;
