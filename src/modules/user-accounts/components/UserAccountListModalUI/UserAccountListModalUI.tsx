import React from "react";
import { ModalInfo, UserAccountListModal } from "../../hooks";
import { Modal } from "@/components/ui/modal";
import Button from "@/components/ui/button/Button";

type Props = {
  isPending: boolean;
  modalInfo: ModalInfo;
  onClose: () => void;
  onOk: () => void;
};

const UserAccountListModalUI = ({
  onClose,
  onOk,
  modalInfo,
  isPending,
}: Props) => {
  const { id, modalType } = modalInfo;
  const title =
    modalType === UserAccountListModal.ACTIVATE
      ? "Activate User"
      : "Deactivate User";
  const description =
    modalType === UserAccountListModal.ACTIVATE
      ? "The user account has been successfully activated and can now access the system."
      : "The user account has been deactivated and no longer has access to the system.";

  if (!id) return null;

  return (
    <Modal
      isOpen={!!id}
      onClose={onClose}
      className="max-w-[600px] max-h-[80vh] overflow-y-auto p-5 lg:p-10"
    >
      <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90 sm:text-title-sm">
        {title}
      </h4>
      <p className="text-sm leading-6 text-gray-500 dark:text-gray-400 mb-6">
        {description}
      </p>
      <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
        <Button
          size="sm"
          variant="outline"
          onClick={onClose}
          disabled={isPending}
        >
          Close
        </Button>
        <Button
          size="sm"
          onClick={onOk}
          loading={isPending}
          disabled={isPending}
        >
          Ok
        </Button>
      </div>
    </Modal>
  );
};

export default UserAccountListModalUI;
