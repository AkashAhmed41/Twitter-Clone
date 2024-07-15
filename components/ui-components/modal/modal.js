import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

import { Dialog, DialogContent } from "../dialog/dialog";

import styles from "./modal.module.css";

export default function Modal({ body, footer, isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <div className={styles.modalHeader}>
          <button className={styles.cancelButton}>
            <X size={24} onClick={onClose} />
          </button>
          <Image src={"/images/x.svg"} alt="X" width={45} height={45} />
        </div>
        <div className={styles.mainContent}>{body}</div>
        {footer && <div>{footer}</div>}
      </DialogContent>
    </Dialog>
  );
}
