import React from "react";
import { ReportHeaderUI } from "../../components";
import ReportDashboardContainer from "../report-dashboard-container";
import ReportOrdersContainer from "../report-orders-container";
import ReportProductsContainer from "../report-products-container";
import ReportRevenueContainer from "../report-revenue-container";
import ReportUsersContainer from "../report-users-container";

const ReportContainer = () => {
  return (
    <div className="space-y-6 w-full">
      <ReportHeaderUI />
      <ReportDashboardContainer />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReportRevenueContainer />
        <ReportOrdersContainer />
        <ReportUsersContainer />
        <ReportProductsContainer />
      </div>
    </div>
  );
};

export default ReportContainer;
