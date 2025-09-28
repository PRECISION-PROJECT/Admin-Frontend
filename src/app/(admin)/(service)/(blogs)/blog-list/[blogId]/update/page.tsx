import { BlogUpdateModule } from "@/modules/service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Update",
  description: "View blog information",
};

type PageProps = { params: Promise<{ blogId: string }> };

const BlogUpdate = async (props: PageProps) => {
  const params = await props.params;
  return <BlogUpdateModule id={params.blogId} />;
};

export default BlogUpdate;
