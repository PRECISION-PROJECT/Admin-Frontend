import { ProductLowStockModule } from "@/modules/ecommerce/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Low Stock Products",
  description: "View and manage products with low inventory levels",
};

const ProductLowStockPage = () => {
  return <ProductLowStockModule />;
};

export default ProductLowStockPage;
