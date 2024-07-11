import Modal from "@/components/ui-components/modal/modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import React, { useState } from "react";

import styles from "./registerModal.module.css";

export default function RegisterModal() {
  const [step, setStep] = useState(1);
  const registerModal = useRegisterModal();

  const bodyContent =
    step === 1 ? (
      <RegisterStep1 />
    ) : step === 2 ? (
      <RegisterStep2 />
    ) : (
      <RegisterStep3 />
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

function RegisterStep1() {
  return <div>Register step 1</div>;
}

function RegisterStep2() {
  return <div>Register step 2</div>;
}

function RegisterStep3() {
  return <div>Register step 3</div>;
}
