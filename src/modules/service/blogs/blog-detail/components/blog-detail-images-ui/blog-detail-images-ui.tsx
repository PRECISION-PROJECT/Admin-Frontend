import { IBlog } from "@/apis/blogs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageLoader from "@/components/ui/image-loader";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";

type Props = {
  blog: IBlog;
};

const BlogDetailImagesUI = ({ blog }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Images</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Feature Image
              </h3>
              <div>
                {blog?.imageUrl ? (
                  <ImageZoom>
                    <ImageLoader
                      alt={blog?.title}
                      className="h-auto w-32"
                      height={800}
                      src={blog?.imageUrl!}
                      unoptimized
                      width={1200}
                    />
                  </ImageZoom>
                ) : (
                  <div className="w-full h-20 bg-muted rounded-md border flex items-center justify-center">
                    <p className="text-xs text-muted-foreground">
                      No Feature Image
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-2">
                Additional Images
              </h3>
              {blog?.images && blog?.images.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {blog?.images.map((image, index) => (
                    <ImageZoom key={`${index}-${image}`}>
                      <ImageLoader
                        alt={`${blog?.title} - Image ${index + 1}`}
                        className="h-auto w-32"
                        height={800}
                        src={image}
                        unoptimized
                        width={1200}
                      />
                    </ImageZoom>
                  ))}
                </div>
              ) : (
                <div className="w-full h-20 bg-muted rounded-md border flex items-center justify-center">
                  <p className="text-xs text-muted-foreground">
                    No Additional Images
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogDetailImagesUI;
