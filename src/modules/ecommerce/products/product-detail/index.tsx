import PageContainer from "@/components/containers/page-container";
import { ProductDetailContainer } from "./containers";

type Props = {
  id: string;
};

const ProductDetailModule = (props: Props) => {
  return (
    <PageContainer scrollable>
      <div className="flex flex-1 flex-col space-y-4 mb-4">
        <ProductDetailContainer id={props.id} />
      </div>
    </PageContainer>
  );
};

export default ProductDetailModule;
