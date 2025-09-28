"use client";
import { IProduct } from "@/apis/products";
import { Icons } from "@/assets/icons";
import { Heading } from "@/components/shared/heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  product: IProduct;
};

const ProductDetailHeaderUI = ({ product }: Props) => {
  const router = useRouter();
  const id = product?.id;

  return (
    <div className="flex items-start justify-between">
      <div className="space-y-2">
        <div className="flex items-end gap-x-2.5">
          <Heading title="Product Detail" description={`Product ID: ${id}`} />
          <Badge
            variant={product?.status === "active" ? "default" : "secondary"}
            className={
              product?.status === "active"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-500 hover:bg-gray-600"
            }
          >
            {product?.status === "active" ? "Active" : "Inactive"}
          </Badge>
          {product?.isFeatured && (
            <Badge
              variant="outline"
              className="border-yellow-500 text-yellow-600"
            >
              <Icons.stars className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground">/{product?.slug}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Icons.package className="h-4 w-4" />
            SKU: {product?.sku}
          </span>
          <span className="flex items-center gap-1">
            <Icons.eye className="h-4 w-4" />
            {product?.viewCount} views
          </span>
        </div>
      </div>

      <Button
        size="default"
        className="space-x-1"
        onClick={() => router.push(ROUTES.PRODUCT_UPDATE.replace(":id", id))}
      >
        <Icons.edit size={18} /> <span>Edit Product</span>
      </Button>
    </div>
  );
};

export default ProductDetailHeaderUI;
