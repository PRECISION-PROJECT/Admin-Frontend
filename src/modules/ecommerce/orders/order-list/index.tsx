import PageContainer from "@/components/containers/page-container";
import { Separator } from "@/components/ui/separator";
import { OrderListHeaderUI } from "./components";
import OrderListProvider from "./contexts/order-list-context";
import { OrderListTableContainer } from "./containers";

const OrderListModule = () => {
  return (
    <OrderListProvider>
      <PageContainer scrollable={false}>
        <div className="flex flex-1 flex-col space-y-4">
          <OrderListHeaderUI />
          <Separator />
          <OrderListTableContainer />
        </div>
      </PageContainer>
    </OrderListProvider>
  );
};

export default OrderListModule;
