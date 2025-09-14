import { GetWhoAmIResponse } from "@/api/auth/response.dto";
import { AugmentedColumnDef } from "@/components/tables/BaseTables";
import { formatDate } from "@/utils";
import React from "react";
import { UserAccountListModal } from "../../hooks";
import Button from "@/components/ui/button/Button";

export const columns = (
  openModal: (modalType: UserAccountListModal, id: string) => void
): AugmentedColumnDef<GetWhoAmIResponse>[] => [
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
      return <>{updatedAt ? formatDate(updatedAt) : "-"}</>;
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: (props) => {
      const row = props.row.original;
      const status = row?.status;

      if (status === "active") {
        return (
          <Button
            size="sm"
            onClick={() => openModal(UserAccountListModal.DEACTIVATE, row.id)}
          >
            Deactivate
          </Button>
        );
      }

      return (
        <Button
          size="sm"
          onClick={() => openModal(UserAccountListModal.ACTIVATE, row.id)}
        >
          Activate
        </Button>
      );
    },
  },
];
