import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type Props = {
  id: string;
  onOpenDialog: () => void;
};

const UpdateCategoryActionUI = (props: Props) => {
  return (
    <CardHeader className="flex-row justify-between items-center">
      <CardTitle className="text-left text-2xl font-bold">
        Update Category {props.id}
      </CardTitle>
      <Button onClick={props.onOpenDialog} variant="destructive">
        <Icons.trash className="mr-2 h-4 w-4" />
        Delete
      </Button>
    </CardHeader>
  );
};

export default UpdateCategoryActionUI;
