"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./dialog.module.css";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={`${styles.fixed} ${styles["inset-0"]} ${styles["z-50"]} ${styles["bg-black\\/80"]} ${styles["data-\\[state\\=open\\]\\:animate-in"]} ${styles["data-\\[state\\=closed\\]\\:animate-out"]} ${styles["data-\\[state\\=closed\\]\\:fade-out-0"]} ${styles["data-\\[state\\=open\\]\\:fade-in-0"]} ${className}`}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={`${styles.fixed} ${styles["left-\\[50%\\]"]} ${styles["top-\\[50%\\]"]} ${styles["z-50"]} ${styles.grid} ${styles["w-full"]} ${styles["max-w-lg"]} ${styles["translate-x-\\[\\-50%\\]"]} ${styles["translate-y-\\[\\-50%\\]"]} ${styles["gap-4"]} ${styles.border} ${styles["bg-background"]} ${styles["p-6"]} ${styles["shadow-lg"]} ${styles["duration-200"]} ${styles["data-\\[state\\=open\\]\\:animate-in"]} ${styles["data-\\[state\\=closed\\]\\:animate-out"]} ${styles["data-\\[state\\=closed\\]\\:fade-out-0"]} ${styles["data-\\[state\\=open\\]\\:fade-in-0"]} ${styles["data-\\[state\\=closed\\]\\:zoom-out-95"]} ${styles["data-\\[state\\=open\\]\\:zoom-in-95"]} ${styles["data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2"]} ${styles["data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48%\\]"]} ${styles["data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2"]} ${styles["data-\\[state\\=open\\]\\:slide-in-from-top-\\[48%\\]"]} ${styles["sm\\:rounded-lg"]} ${className}`}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          className={`${styles.absolute} ${styles["right-4"]} ${styles["top-4"]} ${styles["rounded-sm"]} ${styles["opacity-70"]} ${styles["ring-offset-background"]} ${styles["transition-opacity"]} ${styles["hover\\:opacity-100"]} ${styles["focus\\:outline-none"]} ${styles["focus\\:ring-2"]} ${styles["focus\\:ring-ring"]} ${styles["focus\\:ring-offset-2"]} ${styles["disabled\\:pointer-events-none"]} ${styles["data-\\[state\\=open\\]\\:bg-accent"]} ${styles["data-\\[state\\=open\\]\\:text-muted-foreground"]}`}
        >
          <Cross2Icon className={styles["h-4 w-4"]} />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }) => (
  <div
    className={`${styles.flex} ${styles["flex-col"]} ${styles["space-y-1.5"]} ${styles["text-center"]} ${styles["sm\\:text-left"]} ${className}`}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }) => (
  <div
    className={`${styles.flex} ${styles["flex-col-reverse"]} ${styles["sm\\:flex-row"]} ${styles["sm\\:justify-end"]} ${styles["sm\\:space-x-2"]} ${className}`}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={`${styles["text-lg"]} ${styles["font-semibold"]} ${styles["leading-none"]} ${styles["tracking-tight"]} ${className}`}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={`${styles["text-sm"]} ${styles["text-muted-foreground"]} ${className}`}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
