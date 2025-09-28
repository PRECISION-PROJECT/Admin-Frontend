"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  ProductDetailHeaderUI,
  ProductDetailInfoUI,
  ProductDetailNotFoundUI,
  ProductDetailSkeletonUI,
  ProductDetailSubUI,
} from "../../components";
import { useProductDetail } from "../../hooks";

type Props = {
  id: string;
};

const ProductDetailContainer = (props: Props) => {
  const { data, isLoading } = useProductDetail(props.id);

  if (isLoading) {
    return <ProductDetailSkeletonUI />;
  }

  if (!data) return <ProductDetailNotFoundUI />;

  return (
    <>
      <ProductDetailHeaderUI product={data} />
      <Separator />
      <ProductDetailInfoUI product={data} />
      <Separator />
      <ProductDetailSubUI product={data} />
    </>
  );
};

export default ProductDetailContainer;
