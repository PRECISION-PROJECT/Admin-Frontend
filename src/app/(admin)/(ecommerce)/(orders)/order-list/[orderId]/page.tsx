import { OrderDetailModule } from "@/modules/ecommerce/orders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Details",
  description: "View and manage Order information",
};

type PageProps = { params: Promise<{ orderId: string }> };

const OrderDetail = async (props: PageProps) => {
  const params = await props.params;
  return <OrderDetailModule id={params.orderId} />;
};

export default OrderDetail;
