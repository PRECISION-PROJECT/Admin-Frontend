import PageContainer from "@/components/containers/page-container";
import { Separator } from "@/components/ui/separator";
import CategoryListProvider from "./contexts/category-list-context";
import { CategoryListHeaderUI } from "./components";
import { CategoryListTableContainer } from "./containers";

const CategoryListModule = () => {
  return (
    <CategoryListProvider>
      <PageContainer scrollable={false}>
        <div className="flex flex-1 flex-col space-y-4">
          <CategoryListHeaderUI />
          <Separator />
          <CategoryListTableContainer />
        </div>
      </PageContainer>
    </CategoryListProvider>
  );
};

export default CategoryListModule;
