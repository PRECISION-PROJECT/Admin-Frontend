import { GetWhoAmIResponse } from "@/api/auth/response.dto";
import { AugmentedColumnDef } from "@/components/tables/BaseTables";
import { formatDate } from "@/utils";
import React from "react";

export const columns = (): AugmentedColumnDef<GetWhoAmIResponse>[] => [
  {
    accessorKey: "id",
    header: "User Id",
    cell: (props) => {
      const row = props.row.original;
      const id = row.id;
      return <>{id}</>;
    },
  },
  {
    accessorKey: "firstName",
    header: "First Name",
    cell: (props) => {
      const row = props.row.original;
      const firstName = row.firstName;
      return <>{firstName}</>;
    },
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    cell: (props) => {
      const row = props.row.original;
      const lastName = row.lastName;
      return <>{lastName}</>;
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (props) => {
      const row = props.row.original;
      const role = row.role;
      return <>{role}</>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Last Updated",
    cell: (props) => {
      const row = props.row.original;
      const updatedAt = row.updatedAt;
      return (
        <>{updatedAt ? formatDate(updatedAt) : "-"}</>
      );
    },
  },
];
