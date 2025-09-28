import { IBlog } from "@/apis/blogs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  blog: IBlog;
};

const BlogDetailContentUI = ({ blog }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Content</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </CardContent>
    </Card>
  );
};

export default BlogDetailContentUI;
