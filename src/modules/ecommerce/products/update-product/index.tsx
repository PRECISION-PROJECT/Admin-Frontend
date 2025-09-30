import PageContainer from "@/components/containers/page-container";
import React from "react";
import { UpdateProductContainer } from "./containers";

type Props = {
  id: string;
};

const UpdateProductModule = ({ id }: Props) => {
  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-4">
        <UpdateProductContainer id={id} />
      </div>
    </PageContainer>
  );
};

export default UpdateProductModule;
