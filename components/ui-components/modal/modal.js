import React from "react";
import { Dialog, DialogContent } from "../dialog/dialog";

import styles from "./modal.module.css";

export default function Modal({ body, footer, isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <div className={styles.seperator}>{body}</div>
        {footer && <div className={styles.seperator}>{footer}</div>}
      </DialogContent>
    </Dialog>
  );
}
