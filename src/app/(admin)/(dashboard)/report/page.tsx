import { ReportModule } from "@/modules/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report",
  description: "View business analytics and performance reports",
};

const ReportPage = () => {
  return <ReportModule />;
};

export default ReportPage;
