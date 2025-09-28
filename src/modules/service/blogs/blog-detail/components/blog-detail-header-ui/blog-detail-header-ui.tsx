"use client";
import { IBlog } from "@/apis/blogs";
import { Icons } from "@/assets/icons";
import { Heading } from "@/components/shared/heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/navigation";

type Props = {
  blog: IBlog;
};

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

const BlogDetailHeaderUI = ({ blog }: Props) => {
  const router = useRouter();
  const id = blog?.id;

  return (
    <div className="flex items-start justify-between">
      <div className="space-y-2">
        <div className="flex items-end gap-x-2.5">
          <Heading title="Blog Detail" description={`Blog ID: ${id}`} />
          <Badge variant="secondary" className={getStatusColor(blog.status)}>
            {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
          </Badge>
          {blog.isFeatured && (
            <Badge
              variant="outline"
              className="border-yellow-500 text-yellow-600"
            >
              Featured
            </Badge>
          )}
        </div>
      </div>

      <Button
        size="default"
        className="space-x-1"
        onClick={() => router.push(ROUTES.BLOGS_UPDATE.replace(":id", id))}
      >
        <Icons.edit size={18} /> <span>Edit Blog</span>
      </Button>
    </div>
  );
};

export default BlogDetailHeaderUI;
