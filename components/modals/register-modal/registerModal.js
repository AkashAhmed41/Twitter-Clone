import Modal from "@/components/ui-components/modal/modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./registerModal.module.css";
import { useForm } from "react-hook-form";
import { registerFirstStepSchema } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui-components/form/form";
import { Input } from "@/components/ui-components/input/input";

export default function RegisterModal() {
  const [step, setStep] = useState(1);
  const registerModal = useRegisterModal();

  const bodyContent =
    step === 1 ? (
      <RegisterFirstStep />
    ) : step === 2 ? (
      <RegisterSecondStep />
    ) : (
      <RegisterThirdStep />
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

function RegisterFirstStep() {
  const form = useForm({
    resolver: zodResolver(registerFirstStepSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
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
      </form>
    </Form>
  );
}

function RegisterSecondStep() {
  return <div>Register step 2</div>;
}

function RegisterThirdStep() {
  return <div>Register step 3</div>;
}
