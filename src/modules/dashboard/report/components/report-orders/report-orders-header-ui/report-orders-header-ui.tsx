import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const ReportOrdersHeaderUI = () => {
  return (
    <CardHeader>
      <CardTitle>Orders Overview</CardTitle>
      <CardDescription>Monitor order status and trends</CardDescription>
    </CardHeader>
  );
};

export default ReportOrdersHeaderUI;
