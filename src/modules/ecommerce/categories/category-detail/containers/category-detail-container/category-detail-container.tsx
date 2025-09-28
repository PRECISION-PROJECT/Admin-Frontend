"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  CategoryDetailHeaderUI,
  CategoryDetailInfoUI,
  CategoryDetailNotFoundUI,
  CategoryDetailSkeletonUI,
  CategoryDetailSubUI,
} from "../../components";
import { useCategoryDetail } from "../../hooks";

type Props = {
  id: string;
};

const CategoryDetailContainer = (props: Props) => {
  const { data, isLoading } = useCategoryDetail(props.id);

  if (isLoading) {
    return <CategoryDetailSkeletonUI />;
  }

  if (!data) return <CategoryDetailNotFoundUI />;

  return (
    <>
      <CategoryDetailHeaderUI id={props.id} />
      <Separator />
      <CategoryDetailInfoUI category={data} />
      <Separator />
      <CategoryDetailSubUI category={data} />
    </>
  );
};

export default CategoryDetailContainer;
