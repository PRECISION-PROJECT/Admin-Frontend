"use client";
import { Separator } from "@/components/ui/separator";
import {
  BlogDetailContentUI,
  BlogDetailHeaderUI,
  BlogDetailImagesUI,
  BlogDetailInfoUI,
  BlogDetailNotFoundUI,
  BlogDetailSeoUI,
  BlogDetailSkeletonUI,
} from "../../components";
import { useBlogDetail } from "../../hooks";

type Props = {
  id: string;
};

const BlogDetailContainer = (props: Props) => {
  const { data, isLoading } = useBlogDetail(props.id);

  if (isLoading) {
    return <BlogDetailSkeletonUI />;
  }

  if (!data) return <BlogDetailNotFoundUI />;

  return (
    <>
      <BlogDetailHeaderUI blog={data} />
      <Separator />
      <BlogDetailImagesUI blog={data} />
      <Separator />
      <BlogDetailInfoUI blog={data} />
      <Separator />
      <BlogDetailContentUI blog={data} />
      <Separator />
      <BlogDetailSeoUI blog={data} />
    </>
  );
};

export default BlogDetailContainer;
