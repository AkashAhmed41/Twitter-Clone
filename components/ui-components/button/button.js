import React from "react";

import styles from "./button.module.css";

export default function Button({
  label,
  secondary,
  fullWidth,
  large,
  disabled,
  outline,
  type,
  onclick,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      type={type}
      className={`${styles.button} ${fullWidth ? styles.full : styles.fit} ${
        secondary ? styles.secondary : styles.primary
      } ${large ? styles.large : styles.medium} ${
        outline ? styles.outline : ""
      }`}
    >
      {label}
    </button>
  );
}
