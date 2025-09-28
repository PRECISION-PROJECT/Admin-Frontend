import { Heading } from "@/components/shared/heading";

const OrderListHeaderUI = () => {
  return (
    <div className="flex items-start justify-between">
      <Heading
        title="Orders"
        description="Manage product orders and their properties"
      />
    </div>
  );
};

export default OrderListHeaderUI;
