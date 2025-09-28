"use client";

import { Category } from "@/apis/categories";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  category: Category;
};

const CategoryDetailSubUI = ({ category }: Props) => {
  const children = category?.children || [];
  const router = useRouter();
  const onView = (id: string) => {
    router.push(ROUTES.CATEGORY_DETAIL.replace(":id", id));
  };

  const onUpdate = (id: string) => {
    router.push(ROUTES.CATEGORY_UPDATE.replace(":id", id));
  };

  if (!children || !children.length) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subcategories</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Sort Order</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {children.map((child) => (
              <TableRow key={child.id}>
                <TableCell className="font-medium">{child.name}</TableCell>
                <TableCell className="text-sm text-muted-foreground max-w-xs truncate">
                  {child.description}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  /{child.slug}
                </TableCell>
                <TableCell>{child.sortOrder}</TableCell>
                <TableCell>
                  <Badge
                    variant={child.isActive ? "default" : "secondary"}
                    className={
                      child.isActive
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gray-500 hover:bg-gray-600"
                    }
                  >
                    {child.isActive ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onView(child.id)}
                    >
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onUpdate(child.id)}
                    >
                      Update
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CategoryDetailSubUI;
