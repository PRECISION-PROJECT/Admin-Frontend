import { GetReportProductsResponse } from "@/apis/reports";
import { CardContent } from "@/components/ui/card";
import ImageLoader from "@/components/ui/image-loader";
import { Separator } from "@/components/ui/separator";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { formatCurrencyUSD } from "@/utils/common";

type Props = {
  data?: GetReportProductsResponse;
};

const ReportProductsContentUI = ({ data }: Props) => {
  return (
    <CardContent>
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Total Products</p>
            <p className="text-lg font-semibold">{data?.totalProducts ?? 0}</p>
          </div>
          <Separator />
          <div>
            <h4 className="font-medium mb-2">Top Selling Products</h4>
            {data?.topSellingProducts && data?.topSellingProducts.length > 0 ? (
              <div className="space-y-3">
                {data?.topSellingProducts.map((product) => (
                  <div
                    key={product?.id}
                    className="flex items-center gap-3 p-2 rounded-lg border"
                  >
                    <ImageZoom>
                      <ImageLoader
                        alt={product.name}
                        className="h-10 w-10"
                        height={800}
                        src={product?.primaryImage?.path!}
                        unoptimized
                        width={1200}
                      />
                    </ImageZoom>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">
                        {product?.name ?? "-"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {product?.orderCount ?? 0} orders
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">
                        {formatCurrencyUSD(product?.revenue ?? 0)}
                      </p>
                      <p className="text-xs text-muted-foreground">revenue</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No top selling products data available
              </p>
            )}
          </div>
          <Separator />
          <div>
            <h4 className="font-medium mb-2">Low Stock Products</h4>
            {data?.lowStockProducts && data?.lowStockProducts.length > 0 ? (
              <div className="space-y-3">
                {data.lowStockProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 p-2 rounded-lg border border-red-200 bg-red-50"
                  >
                    <ImageZoom>
                      <ImageLoader
                        alt={product.name}
                        className="h-10 w-10"
                        height={800}
                        src={product?.primaryImage?.path!}
                        unoptimized
                        width={1200}
                      />
                    </ImageZoom>

                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">
                        {product.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {product.orderCount} orders
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm text-red-600">
                        Low Stock
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatCurrencyUSD(product?.revenue ?? 0)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No low stock products
              </p>
            )}
          </div>
        </div>
      </div>
    </CardContent>
  );
};

export default ReportProductsContentUI;
