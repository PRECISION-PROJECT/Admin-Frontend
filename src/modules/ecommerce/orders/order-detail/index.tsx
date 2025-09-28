import PageContainer from "@/components/containers/page-container";
import { OrderDetailContainer } from "./containers";

type Props = {
  id: string;
};

const OrderDetailModule = (props: Props) => {
  return (
    <PageContainer scrollable>
      <div className="flex flex-1 flex-col space-y-4 mb-4">
        <OrderDetailContainer id={props.id} />
      </div>
    </PageContainer>
  );
};

export default OrderDetailModule;
