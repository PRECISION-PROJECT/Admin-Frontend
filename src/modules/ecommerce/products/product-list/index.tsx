import PageContainer from "@/components/containers/page-container";
import { Separator } from "@/components/ui/separator";
import { ProductListHeaderUI } from "./components";
import { ProductListTableContainer } from "./containers";
import ProductsListProvider from "./contexts/product-list-context";

const ProductListModule = () => {
  return (
    <ProductsListProvider>
      <PageContainer scrollable={false}>
        <div className="flex flex-1 flex-col space-y-4">
          <ProductListHeaderUI />
          <Separator />
          <ProductListTableContainer />
        </div>
      </PageContainer>
    </ProductsListProvider>
  );
};

export default ProductListModule;
