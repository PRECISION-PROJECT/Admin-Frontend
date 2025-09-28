import { BlogDetailModule } from "@/modules/service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details",
  description: "View blog information",
};

type PageProps = { params: Promise<{ blogId: string }> };

const BlogDetail = async (props: PageProps) => {
  const params = await props.params;
  return <BlogDetailModule id={params.blogId} />;
};

export default BlogDetail;
