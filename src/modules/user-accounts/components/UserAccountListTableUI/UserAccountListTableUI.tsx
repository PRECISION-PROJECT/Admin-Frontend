import { AugmentedColumnDef, BaseTables } from "@/components/tables/BaseTables";
import { GetWhoAmIResponse } from "@/api/auth/response.dto";

type Props = {
  data: GetWhoAmIResponse[];
  columns: AugmentedColumnDef<GetWhoAmIResponse>[];
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

const UserAccountListTableUI = ({
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

export default UserAccountListTableUI;
