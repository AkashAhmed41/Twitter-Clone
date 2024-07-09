import Modal from "@/components/ui-components/modal/modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import React from "react";
import { X } from "lucide-react";

import styles from "./registerModal.module.css";

export default function RegisterModal() {
  const registerModal = useRegisterModal();

  const bodyContent = (
    <div className={styles.bodyContent}>
      <button className={styles.cancelButton} onClick={registerModal.onClose}>
        <X size={28} />
      </button>
    </div>
  );

  const footer = <div>footer content</div>;

  return (
    <Modal
      body={bodyContent}
      footer={footer}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
    />
  );
}
