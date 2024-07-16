import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "@/components/ui-components/modal/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui-components/form/form";
import { Input } from "@/components/ui-components/input/input";
import Button from "@/components/ui-components/button/button";
import useRegisterModal from "@/hooks/useRegisterModal";
import {
  registerFirstStepSchema,
  registerSecondStepSchema,
  registerThirdStepSchema,
} from "@/lib/validation";

import styles from "./registerModal.module.css";

export default function RegisterModal() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    email: "",
    dateOfBirth: { month: "", day: "", year: "" },
  });
  const registerModal = useRegisterModal();

  const bodyContent =
    step === 1 ? (
      <RegisterFirstStep setData={setData} setStep={setStep} />
    ) : step === 2 ? (
      <RegisterSecondStep data={data} setStep={setStep} />
    ) : (
      <RegisterThirdStep data={data} />
    );

  return (
    <Modal
      body={bodyContent}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
    />
  );
}

function RegisterFirstStep({ setData, setStep }) {
  const form = useForm({
    resolver: zodResolver(registerFirstStepSchema),
    defaultValues: {
      email: "",
      name: "",
      dateOfBirth: {
        month: "",
        day: "",
        year: "",
      },
    },
  });

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 70 }, (_, i) => currentYear - i);

  const daysInMonth = (month) => {
    return new Date(currentYear, month, 0).getDate();
  };

  const handleMonthChange = (e) => {
    form.setValue("dateOfBirth.month", e.target.value);
    form.setValue("dateOfBirth.day", "");
  };

  const handleDayChange = (e) => {
    form.setValue("dateOfBirth.day", e.target.value);
  };

  const handleYearChange = (e) => {
    form.setValue("dateOfBirth.year", e.target.value);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const selectedMonth = form.watch("dateOfBirth.month");
  const selectedDay = form.watch("dateOfBirth.day");
  const selectedYear = form.watch("dateOfBirth.year");

  console.log({ selectedMonth, selectedDay, selectedYear });

  function onSubmit(values) {
    const formData = {
      ...values,
      dateOfBirth: {
        month: form.getValues("dateOfBirth.month"),
        day: form.getValues("dateOfBirth.day"),
        year: form.getValues("dateOfBirth.year"),
      },
    };
    console.log(formData);
    setData(formData);
    setStep(2);
  }

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.header}>Create your account</div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <div className={styles.dobHeader}>Date of birth</div>
          <div className={styles.message}>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </div>
        </div>
        <div className={styles.dobSection}>
          <select
            className={`${styles.select} ${styles.monthSelector}`}
            onChange={handleMonthChange}
            value={selectedMonth}
            {...form.register("dateOfBirth.month")}
          >
            <option value="">Month</option>
            {months.map((month, index) => (
              <option key={month} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
          <select
            className={`${styles.select} ${styles.daySelector}`}
            onChange={handleDayChange}
            value={selectedDay}
            {...form.register("dateOfBirth.day")}
          >
            <option value="">Day</option>
            {Array.from(
              { length: daysInMonth(selectedMonth) },
              (_, i) => i + 1
            ).map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
          <select
            className={`${styles.select} ${styles.yearSelector}`}
            onChange={handleYearChange}
            value={selectedYear}
            {...form.register("dateOfBirth.year")}
          >
            <option value="">Year</option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <Button
          label={"Next"}
          type="submit"
          secondary={true}
          large={true}
          fullWidth={true}
          disabled={isSubmitting}
        />
      </form>
    </Form>
  );
}

function RegisterSecondStep({ data, setStep }) {
  const form = useForm({
    resolver: zodResolver(registerSecondStepSchema),
    defaultValues: {
      verificationCode: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    setStep(3);
  }

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
        <div style={{ marginBottom: "240px" }}>
          <div style={{ marginBottom: "10px" }}>
            <div className={styles.header}>We sent you a code</div>
            <div className={styles.message}>
              {`Enter it below to verify ${data.email}.`}
            </div>
          </div>
          <FormField
            control={form.control}
            name="verificationCode"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Verification code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <span className={styles["link-text"]}>Didn't receive email?</span>
        </div>
        <Button
          label={"Next"}
          type="submit"
          secondary={true}
          large={true}
          fullWidth={true}
          disabled={isSubmitting}
        />
      </form>
    </Form>
  );
}

function RegisterThirdStep({ data }) {
  const form = useForm({
    resolver: zodResolver(registerThirdStepSchema),
    defaultValues: {
      password: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
        <div style={{ marginBottom: "120px" }}>
          <div style={{ marginBottom: "10px" }}>
            <div className={styles.header}>You'll need a password</div>
            <div className={styles.message}>
              Make sure it’s 8 characters or more.
            </div>
          </div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className={styles["small-text"]}>
          By signing up, you agree to the{" "}
          <span className={styles["link-text"]}>Terms of Service</span> and
          <span className={styles["link-text"]}>Privacy Policy</span>, including
          <span className={styles["link-text"]}>Cookie Use</span>. X may use
          your contact information, including your email address and phone
          number for purposes outlined in our Privacy Policy, like keeping your
          account secure and personalizing our services, including ads.{" "}
          <span className={styles["link-text"]}>Learn more</span>. Others will
          be able to find you by email or phone number, when provided, unless
          you choose otherwise <span className={styles["link-text"]}>here</span>
          .
        </div>
        <Button
          label={"Sign Up"}
          type="submit"
          secondary={true}
          large={true}
          fullWidth={true}
          disabled={isSubmitting}
        />
      </form>
    </Form>
  );
}
