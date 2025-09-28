import PageContainer from "@/components/containers/page-container";
import { Separator } from "@/components/ui/separator";
import { ProductInventoryHeaderUI } from "./components";
import { ProductInventoryTableContainer } from "./containers";
import ProductInventoryProvider from "./contexts/product-inventory-context";

const ProductInventoryModule = () => {
  return (
    <ProductInventoryProvider>
      <PageContainer scrollable={false}>
        <div className="flex flex-1 flex-col space-y-4">
          <ProductInventoryHeaderUI />
          <Separator />
          <ProductInventoryTableContainer />
        </div>
      </PageContainer>
    </ProductInventoryProvider>
  );
};

export default ProductInventoryModule;
