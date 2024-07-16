import * as z from "zod";

export const registerFirstStepSchema = z.object({
  name: z
    .string()
    .min(1, { message: "What's your name?" })
    .max(50, { message: "Name can contain at most 50 character(s)" }),
  email: z.string().email({ message: "Please enter a valid email." }),
});

export const registerSecondStepSchema = z.object({
  verificationCode: z
    .string()
    .length(6, { message: "Verification code must contain 6 characters." }),
});

export const registerThirdStepSchema = z.object({
  password: z.string().min(8, {
    message:
      "Your password needs to be at least 8 characters. Please enter a longer one.",
  }),
});
