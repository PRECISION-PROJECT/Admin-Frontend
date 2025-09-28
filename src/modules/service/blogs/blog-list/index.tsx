import PageContainer from "@/components/containers/page-container";
import { Separator } from "@/components/ui/separator";
import { BlogsListHeaderUI } from "./components";
import { BlogsListTableContainer } from "./containers";
import BlogsListProvider from "./contexts/blogs-list-context";

const BlogsListModule = () => {
  return (
    <BlogsListProvider>
      <PageContainer scrollable={false}>
        <div className="flex flex-1 flex-col space-y-4">
          <BlogsListHeaderUI />
          <Separator />
          <BlogsListTableContainer />
        </div>
      </PageContainer>
    </BlogsListProvider>
  );
};

export default BlogsListModule;
