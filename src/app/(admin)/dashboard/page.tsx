import { ROUTES } from "@/utils/routes";
import { redirect } from "next/navigation";

const DashboardPage = () => {
  return redirect(ROUTES.COMING_SOON);
};

export default DashboardPage;
