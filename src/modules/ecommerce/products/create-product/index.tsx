import PageContainer from "@/components/containers/page-container";
import React from "react";
import { CreateProductContainer } from "./containers";

const CreateProductModule = () => {
  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-4">
        <CreateProductContainer />
      </div>
    </PageContainer>
  );
};

export default CreateProductModule;
