import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import OrdersModule from "@/modules/orders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders",
  description: "Orders Management",
};

const OrdersPage = () => {
  return (
    <div>
      <PageBreadcrumb pageTitle="Orders Management" />
      <OrdersModule />
    </div>
  );
};

export default OrdersPage;
