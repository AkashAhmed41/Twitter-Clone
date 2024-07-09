"use client";

import Image from "next/image";
import React, { useCallback } from "react";

import styles from "./auth.module.css";
import Button from "../ui-components/button/button";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import useRegisterModal from "@/hooks/useRegisterModal";
import RegisterModal from "../modals/register-modal/registerModal";

export default function Auth() {
  const registerModal = useRegisterModal();

  const onOpenRegisterModal = useCallback(() => {
    registerModal.onOpen();
  }, [registerModal]);

  return (
    <>
      <RegisterModal />
      <div className={styles.container}>
        <Image
          src={"/images/x.svg"}
          alt="X"
          width={500}
          height={480}
          className={styles["app-logo"]}
        />

        <div className={styles["right-side"]}>
          <div className={styles["small-logo"]}>
            <Image src={"/images/x.svg"} alt="X" width={60} height={60} />
          </div>
          <h1 className={styles.header}>Happening now</h1>
          <div className={styles.signup}>
            <h2>Join today.</h2>
            <div className={styles.buttons}>
              <Button
                label={
                  <div className={styles.label}>
                    <FcGoogle />
                    Sign up with Google
                  </div>
                }
                fullWidth={true}
                secondary={true}
                large={true}
              />
              <Button
                label={
                  <div className={styles.label}>
                    <GrApple />
                    Sign up with Google
                  </div>
                }
                fullWidth={true}
                secondary={true}
                large={true}
              />
              <div className={styles.divider}>
                <div className={styles.line} />
                <p className={styles.text}>or</p>
                <div className={styles.line} />
              </div>
              <Button
                label={"Create account"}
                fullWidth={true}
                onclick={onOpenRegisterModal}
              />
              <div className={styles["small-text"]}>
                By signing up, you agree to the{" "}
                <span className={styles["link-text"]}>Terms of Service</span>{" "}
                and
                <span className={styles["link-text"]}> Privacy Policy</span>,
                including
                <span className={styles["link-text"]}> Cookie Use</span>.
              </div>
            </div>
          </div>
          <div className={styles.signin}>
            <h3>Already have an account?</h3>
            <div className={styles.buttons}>
              <Button label={"Sign in"} fullWidth={true} outline={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
