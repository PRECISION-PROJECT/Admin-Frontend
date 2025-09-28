import { ProductDetailModule } from "@/modules/ecommerce/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details",
  description: "View and manage product information",
};

type PageProps = { params: Promise<{ productId: string }> };

const ProductDetail = async (props: PageProps) => {
  const params = await props.params;
  return <ProductDetailModule id={params.productId} />;
};

export default ProductDetail;
