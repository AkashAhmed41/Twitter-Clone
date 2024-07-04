import Image from "next/image";
import React from "react";

import styles from "./auth.module.css";
import Button from "../button/button";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";

export default function Auth() {
  return (
    <>
      <div className={styles.container}>
        <Image
          src={"/images/x.svg"}
          alt="X"
          width={500}
          height={480}
          className={styles.logo}
        />

        <div className={styles.rightSide}>
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
