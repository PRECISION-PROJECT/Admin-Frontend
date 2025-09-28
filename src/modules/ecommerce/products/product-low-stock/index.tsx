import PageContainer from "@/components/containers/page-container";
import { Separator } from "@/components/ui/separator";
import { ProductLowStockHeaderUI } from "./components";
import { ProductLowStockTableContainer } from "./containers";
import ProductLowStockProvider from "./contexts/product-low-stock-context";

const ProductLowStockModule = () => {
  return (
    <ProductLowStockProvider>
      <PageContainer scrollable={false}>
        <div className="flex flex-1 flex-col space-y-4">
          <ProductLowStockHeaderUI />
          <Separator />
          <ProductLowStockTableContainer />
        </div>
      </PageContainer>
    </ProductLowStockProvider>
  );
};

export default ProductLowStockModule;
