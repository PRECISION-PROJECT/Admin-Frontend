"use client";

import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/navigation";
import React from "react";
import UpdateProductFormContainer from "../update-product-form-container";

type Props = {
  id: string;
};

const UpdateProductContainer = ({ id }: Props) => {
  const router = useRouter();
  return (
    <Card className="mx-auto w-full">
      <CardHeader className="flex justify-between flex-row">
        <CardTitle className="text-left text-2xl font-bold">
          Update Product
        </CardTitle>
        <Button
          onClick={() => router.push(ROUTES.PRODUCT_LIST)}
          variant="outline"
          className="cursor-pointer"
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Go to Product List
        </Button>
      </CardHeader>
      <CardContent>
        <UpdateProductFormContainer id={id} />
      </CardContent>
    </Card>
  );
};

export default UpdateProductContainer;
