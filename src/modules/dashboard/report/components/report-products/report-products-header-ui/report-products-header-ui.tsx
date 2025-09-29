import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const ReportProductsHeaderUI = () => {
  return (
    <CardHeader>
      <CardTitle>Products Overview</CardTitle>
      <CardDescription>
        Monitor product performance and inventory
      </CardDescription>
    </CardHeader>
  );
};

export default ReportProductsHeaderUI;
