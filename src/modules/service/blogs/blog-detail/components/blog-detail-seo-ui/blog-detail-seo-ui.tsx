import { IBlog } from "@/apis/blogs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  blog: IBlog;
};

const BlogDetailSeoUI = ({ blog }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO & Marketing</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-medium text-sm text-muted-foreground mb-1">
            Meta Title
          </h3>
          <p className="text-sm">{blog?.metaTitle}</p>
        </div>

        <div>
          <h3 className="font-medium text-sm text-muted-foreground mb-1">
            Meta Description
          </h3>
          <p className="text-sm">{blog?.metaDescription}</p>
        </div>

        <div>
          <h3 className="font-medium text-sm text-muted-foreground mb-1">
            Keywords
          </h3>
          <div className="flex flex-wrap gap-2">
            {blog?.keywords.map((keyword, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogDetailSeoUI;
