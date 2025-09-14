import { AugmentedColumnDef, BaseTables } from "@/components/tables/BaseTables";
import { Order } from "@/api/orders/response.dto";

type Props = {
  data: Order[];
  columns: AugmentedColumnDef<Order>[];
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

const OrderListTableUI = ({
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

export default OrderListTableUI;
