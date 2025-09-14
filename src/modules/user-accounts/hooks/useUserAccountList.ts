import { GetWhoAmIResponse } from "@/api/auth/response.dto";
import { useActivateUserMutate, useDeactivateUserMutate } from "@/api/user";
import { GetUserListParams } from "@/api/user/request.dto";
import { useCallback, useState } from "react";
import { toast } from "sonner";

type Props = {
  metaData: {
    totalPages: number;
  };
  userData: GetWhoAmIResponse[];
  queryParams: GetUserListParams;
  isLoading: boolean;
  setQueryParams: (queryParams: GetUserListParams) => void;
};

export enum UserAccountListModal {
  DEACTIVATE = "deactivate",
  ACTIVATE = "activate",
}

export type ModalInfo = {
  modalType: UserAccountListModal | null;
  id: string | null;
};

const initialModalInfo = {
  modalType: null,
  id: null,
};

export const useUserAccountList = (props: Props) => {
  const [modalInfo, setModalInfo] = useState<ModalInfo>(initialModalInfo);
  const useActivateUserMutation = useActivateUserMutate();
  const useDeactivateUserMutation = useDeactivateUserMutate();

  const isPending =
    useActivateUserMutation.isPending || useDeactivateUserMutation.isPending;
  const mutateFunc =
    modalInfo.modalType === UserAccountListModal.ACTIVATE
      ? useActivateUserMutation
      : useDeactivateUserMutation;

  const openModal = useCallback(
    (modalType: UserAccountListModal, id: string) =>
      setModalInfo({ modalType, id }),
    []
  );

  const onOpenModalChange = useCallback(
    () => setModalInfo(initialModalInfo),
    []
  );

  const onOk = async () => {
    if (isPending || !modalInfo.modalType || !modalInfo.id) return;
    await mutateFunc.mutateAsync({ id: modalInfo.id });
    toast.success(
      "User " + modalInfo.id + " " + modalInfo.modalType + " successfully"
    );
    onOpenModalChange();
  };

  return {
    ...props,
    modalInfo,
    isPending,
    openModal,
    onOpenModalChange,
    onOk,
  };
};
