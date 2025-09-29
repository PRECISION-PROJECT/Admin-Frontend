"use client";

import { Card } from "@/components/ui/card";
import {
  ReportProductsContentUI,
  ReportProductsHeaderUI,
  ReportProductsSkeletonUI,
} from "../../components/report-products";
import { useReportProductsContainer } from "../../hooks";

const ReportProductsContainer = () => {
  const { data, isLoading } = useReportProductsContainer();
  if (isLoading) return <ReportProductsSkeletonUI />;
  return (
    <Card>
      <ReportProductsHeaderUI />
      <ReportProductsContentUI data={data} />
    </Card>
  );
};

export default ReportProductsContainer;
