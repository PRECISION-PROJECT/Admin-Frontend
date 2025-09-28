import PageContainer from "@/components/containers/page-container";
import { CategoryDetailContainer } from "./containers";

type Props = {
  id: string;
};

const CategoryDetailModule = (props: Props) => {
  return (
    <PageContainer scrollable>
      <div className="flex flex-1 flex-col space-y-4 mb-4">
        <CategoryDetailContainer id={props.id} />
      </div>
    </PageContainer>
  );
};

export default CategoryDetailModule;
