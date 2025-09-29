import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};

const ReportProductsSkeletonUI = (props: Props) => {
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
          {/* Total Products Skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-6 w-16" />
          </div>

          {/* Top Selling Products Skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-5 w-36" />
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-lg border"
                >
                  <Skeleton className="h-10 w-10 rounded-md" />
                  <div className="flex-1 space-y-1">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                  <div className="text-right space-y-1">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-3 w-12" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Low Stock Products Skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-5 w-32" />
            <div className="space-y-3">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-lg border border-red-200 bg-red-50"
                >
                  <Skeleton className="h-10 w-10 rounded-md" />
                  <div className="flex-1 space-y-1">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                  <div className="text-right space-y-1">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportProductsSkeletonUI;
