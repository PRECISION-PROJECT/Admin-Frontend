import { IBlog } from "@/apis/blogs";
import { Icons } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

function getStatusColor(status: string) {
  switch (status) {
    case "published":
      return "bg-green-500 hover:bg-green-600";
    case "draft":
      return "bg-yellow-500 hover:bg-yellow-600";
    case "archived":
      return "bg-gray-500 hover:bg-gray-600";
    default:
      return "bg-gray-500 hover:bg-gray-600";
  }
}

type Props = {
  blog: IBlog;
};

const BlogDetailInfoUI = ({ blog }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Excerpt
              </h3>
              <p className="text-sm">{blog?.excerpt}</p>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Author
              </h3>
              <div className="flex items-center gap-2">
                <Icons.user className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm">
                  {blog?.author?.firstName} {blog?.author?.lastName}
                </p>
                <Badge variant="outline" className="text-xs">
                  {blog?.author?.role}
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Status
              </h3>
              <Badge
                variant="secondary"
                className={getStatusColor(blog?.status)}
              >
                {blog?.status.charAt(0).toUpperCase() + blog?.status.slice(1)}
              </Badge>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Sort Order
              </h3>
              <p className="text-sm">{blog?.sortOrder}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Published At
              </h3>
              <div className="flex items-center gap-2">
                <Icons.calendar className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm">
                  {blog?.publishedAt
                    ? format(blog?.publishedAt, "dd/MM/yyyy HH:mm:ss")
                    : "-"}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                View Count
              </h3>
              <div className="flex items-center gap-2">
                <Icons.eye className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm">
                  {blog?.viewCount.toLocaleString()} views
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Created At
              </h3>
              <p className="text-sm">
                {format(blog?.createdAt, "dd/MM/yyyy HH:mm:ss")}
              </p>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Updated At
              </h3>
              <p className="text-sm">
                {format(blog?.updatedAt, "dd/MM/yyyy HH:mm:ss")}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogDetailInfoUI;
