import PageContainer from "@/components/containers/page-container";
import React from "react";
import { UpdateCategoryContainer } from "./containers";

type Props = {
  id: string
}

const UpdateCategoryModule = (props: Props) => {
  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-4">
        <UpdateCategoryContainer id={props.id} />
      </div>
    </PageContainer>
  );
};

export default UpdateCategoryModule;
