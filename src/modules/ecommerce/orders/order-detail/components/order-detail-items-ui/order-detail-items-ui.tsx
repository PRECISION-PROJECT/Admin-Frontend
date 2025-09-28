"use client";

import { IOrder } from "@/apis/orders/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrencyUSD } from "@/utils/common";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";

type Props = {
  order: IOrder;
};

const OrderDetailItemsUI = ({ order }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Items</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {order?.products.length > 0 ? (
            order.products.map((product, index) => (
              <div
                key={`${product.productId}-${index}`}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex-1">
                  <h4 className="font-medium">{product.productName}</h4>
                  <Link
                    href={ROUTES.PRODUCT_DETAIL.replace(
                      ":id",
                      product.productId
                    )}
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    Product ID: {product.productId}
                  </Link>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-sm">Qty: {product.quantity}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatCurrencyUSD(product.unitPrice ?? 0)} each
                  </p>
                  <p className="font-semibold">
                    {formatCurrencyUSD(product.totalPrice ?? 0)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-sm text-muted-foreground">
              No items found
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderDetailItemsUI;
