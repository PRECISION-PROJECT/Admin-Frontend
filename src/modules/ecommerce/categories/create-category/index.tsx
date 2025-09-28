import PageContainer from "@/components/containers/page-container";
import React from "react";
import { CreateCategoryContainer } from "./containers";

const CreateCategoryModule = () => {
  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-4">
        <CreateCategoryContainer />
      </div>
    </PageContainer>
  );
};

export default CreateCategoryModule;
