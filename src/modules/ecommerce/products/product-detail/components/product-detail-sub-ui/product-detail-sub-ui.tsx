"use client";

import { IProduct } from "@/apis/products";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  product: IProduct;
};

const ProductDetailSubUI = ({ product }: Props) => {
  
  return (
    <Card>
        <CardHeader>
          <CardTitle>SEO & Marketing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Meta Title</h3>
                <p className="text-sm">{product?.metaTitle}</p>
              </div>

              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Meta Description</h3>
                <p className="text-sm">{product?.metaDescription}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Keywords</h3>
                <div className="flex flex-wrap gap-1">
                  {product?.keywords.map((keyword, index) => (
                    <Badge key={`${keyword}-${index}`} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-sm text-muted-foreground mb-1">Marketing Flags</h3>
                <div className="flex gap-2">
                  <Badge
                    variant={product?.isFeatured ? "default" : "secondary"}
                    className={product?.isFeatured ? "bg-yellow-500 hover:bg-yellow-600" : ""}
                  >
                    {product?.isFeatured ? "Featured" : "Not Featured"}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
  );
};

export default ProductDetailSubUI;
