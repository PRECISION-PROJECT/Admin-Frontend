"use client";
import { Icons } from "@/assets/icons";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/navigation";

const BlogsListHeaderUI = () => {
  const router = useRouter();
  return (
    <div className="flex items-start justify-between">
      <Heading
        title="Blogs"
        description="Manage list blogs"
      />
      <Button
        size="default"
        className="space-x-1"
        onClick={() => router.push(ROUTES.BLOGS_CREATE)}
      >
        <span>Add Blog</span> <Icons.plusCircle size={18} />
      </Button>
    </div>
  );
};

export default BlogsListHeaderUI;
