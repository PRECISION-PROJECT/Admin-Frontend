import PageContainer from "@/components/containers/page-container";
import React from "react";
import { ReportContainer } from "./containers";

const ReportModule = () => {
  return (
    <PageContainer scrollable>
      <div className="flex flex-1 flex-col mb-4">
        <ReportContainer />
      </div>
    </PageContainer>
  );
};

export default ReportModule;
