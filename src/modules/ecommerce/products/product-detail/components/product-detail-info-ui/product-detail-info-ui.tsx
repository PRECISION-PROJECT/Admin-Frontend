import { IProduct } from "@/apis/products";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageLoader from "@/components/ui/image-loader";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { formatCurrencyUSD } from "@/utils/common";
import { ROUTES } from "@/utils/routes";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

type Props = {
  product: IProduct;
};

const ProDetailInfoUI = ({ product }: Props) => {
  const category = product?.category;
  const isOnSale =
    product?.salePrice &&
    Number.parseFloat(product?.salePrice) < Number.parseFloat(product?.price);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Basic Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Name
              </h3>
              <p className="text-sm">{product?.name}</p>
            </div>
            
            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Description
              </h3>
              <p className="text-sm">{product?.description}</p>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Category
              </h3>
              <Link href={ROUTES.CATEGORY_DETAIL.replace(":id", category?.id ?? "")} className="truncate hover:underline">
                <p className="text-sm">{product?.category?.name ?? "-"}</p>
              </Link>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Type
              </h3>
              <p className="text-sm capitalize">{product?.type}</p>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Sort Order
              </h3>
              <p className="text-sm">{product?.sortOrder}</p>
            </div>
          </div>

          {/* Middle Column - Pricing & Inventory */}
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Pricing
              </h3>
              <div className="flex items-center gap-2">
                {isOnSale ? (
                  <>
                    <span className="text-lg font-semibold text-green-600">
                      {formatCurrencyUSD(product?.salePrice ?? 0)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {formatCurrencyUSD(product?.price ?? 0)}
                    </span>
                    <Badge variant="destructive" className="text-xs">
                      Sale
                    </Badge>
                  </>
                ) : (
                  <span className="text-lg font-semibold">
                    {formatCurrencyUSD(product?.price ?? 0)}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                per {product?.unit}
              </p>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Stock Quantity
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  {product?.stockQuantity} {product?.unit}s
                </span>
                <Badge
                  variant={
                    product?.stockQuantity > 50
                      ? "default"
                      : product?.stockQuantity > 10
                      ? "secondary"
                      : "destructive"
                  }
                  className={
                    product?.stockQuantity > 50
                      ? "bg-green-500 hover:bg-green-600"
                      : product?.stockQuantity > 10
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : ""
                  }
                >
                  {product?.stockQuantity > 50
                    ? "In Stock"
                    : product?.stockQuantity > 10
                    ? "Low Stock"
                    : "Critical"}
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Dimensions
              </h3>
              <div className="text-sm space-y-1">
                <p>Length: {product?.length}"</p>
                <p>Width: {product?.width}"</p>
                <p>Height: {product?.height}"</p>
                <p>Weight: {product?.weight} lbs</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Material & Finish
              </h3>
              <div className="text-sm space-y-1">
                <p>Material: {product?.material}</p>
                <p>Finish: {product?.finish}</p>
                <p>Color: {product?.color}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Images & Timestamps */}
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-2">
                Main Image
              </h3>
              {product?.imageUrl ? (
                <ImageZoom>
                  <ImageLoader
                    alt={product?.name}
                    className="h-auto w-32"
                    height={800}
                    src={product?.imageUrl!}
                    unoptimized
                    width={1200}
                  />
                </ImageZoom>
              ) : (
                <div className="w-full h-20 bg-muted rounded-md border flex items-center justify-center">
                  <p className="text-xs text-muted-foreground">No Main Image</p>
                </div>
              )}
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-2">
                Additional Images
              </h3>
              {product?.images && product?.images.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {product?.images.map((image, index) => (
                    <ImageZoom key={`${index}-${image}`}>
                      <ImageLoader
                        alt={`${product?.name} - Image ${index + 1}`}
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

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Created At
              </h3>
              <p className="text-sm">
                {format(product?.createdAt, "dd/MM/yyyy HH:mm:ss")}
              </p>
            </div>

            <div>
              <h3 className="font-medium text-sm text-muted-foreground mb-1">
                Updated At
              </h3>
              <p className="text-sm">
                {format(product?.updatedAt, "dd/MM/yyyy HH:mm:ss")}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProDetailInfoUI;
