import React from "react";
import { Dialog, DialogContent } from "../dialog/dialog";

import styles from "./modal.module.css";
import { X } from "lucide-react";
import Image from "next/image";

export default function Modal({ body, footer, isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <div className={styles.modalHeader}>
          <button className={styles.cancelButton}>
            <X size={28} onClick={onClose} />
          </button>
          <Image src={"/images/x.svg"} alt="X" width={45} height={45} />
        </div>
        <div className={styles.seperator}>{body}</div>
        {footer && <div className={styles.seperator}>{footer}</div>}
      </DialogContent>
    </Dialog>
  );
}
