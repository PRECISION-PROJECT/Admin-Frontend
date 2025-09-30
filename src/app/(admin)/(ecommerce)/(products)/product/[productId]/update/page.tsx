import { UpdateProductModule } from "@/modules/ecommerce/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update Product",
  description: "View and manage product information",
};

type PageProps = { params: Promise<{ productId: string }> };

const UpdateProductPage = async (props: PageProps) => {
  const params = await props.params;
  return <UpdateProductModule id={params.productId} />;
};

export default UpdateProductPage;
