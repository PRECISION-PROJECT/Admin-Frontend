import { AugmentedColumnDef, BaseTables } from "@/components/tables/BaseTables";
import { ProductLowStock } from "@/api/products-low-stock/response.dto";

type Props = {
  data: ProductLowStock[];
  columns: AugmentedColumnDef<ProductLowStock>[];
  isLoading: boolean;
  metaData: {
    totalPages: number;
  };
  filterParams: {
    page: number;
    size: number;
  };
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
};

const ProductLowStockListTableUI = ({
  data,
  columns,
  isLoading,
  metaData,
  filterParams,
  onPageChange,
  onPageSizeChange,
}: Props) => {
  return (
    <BaseTables
      columns={columns}
      data={data}
      isLoading={isLoading}
      paginationProps={{
        currentPage: filterParams.page,
        totalPages: metaData.totalPages,
        onPageChange: onPageChange,
      }}
      pageSizeProps={{
        size: filterParams.size,
        onChange: onPageSizeChange,
      }}
    />
  );
};

export default ProductLowStockListTableUI;
