import PageContainer from "@/components/containers/page-container";
import { BlogDetailContainer } from "./containers";

type Props = {
  id: string;
};

const BlogDetailModule = (props: Props) => {
  return (
    <PageContainer scrollable>
      <div className="flex flex-1 flex-col space-y-4 mb-4">
        <BlogDetailContainer id={props.id} />
      </div>
    </PageContainer>
  );
};

export default BlogDetailModule;
