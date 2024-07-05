import Image from "next/image";
import React from "react";

import styles from "./auth.module.css";
import Button from "../ui-components/button/button";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui-components/dialog/dialog";

export default function Auth() {
  return (
    <>
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
              <Button label={"Create account"} fullWidth={true} />
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
              <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
