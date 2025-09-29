import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const ReportDashboardHeaderUI = () => {
  return (
    <CardHeader>
      <CardTitle>Dashboard Summary (30d)</CardTitle>
      <CardDescription>
        Key metrics overview for the selected period
      </CardDescription>
    </CardHeader>
  );
};

export default ReportDashboardHeaderUI;
