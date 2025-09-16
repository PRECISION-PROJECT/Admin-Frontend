import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import AppointmentsModule from "@/modules/appointments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appointments",
  description: "Appointments Management",
};

const AppointmentsPage = () => {
  return (
    <div>
      <PageBreadcrumb pageTitle="Appointments Management" />
      <AppointmentsModule />
    </div>
  );
};

export default AppointmentsPage;
