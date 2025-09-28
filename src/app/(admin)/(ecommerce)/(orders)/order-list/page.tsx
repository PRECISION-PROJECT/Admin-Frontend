import { OrderListModule } from "@/modules/ecommerce/orders";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Order List",
  description: "Manage product orders and organization",
};

const OrderListPage = () => {
  return <OrderListModule />;
};

export default OrderListPage;
