import * as z from "zod";

export const registerFirstStepSchema = z.object({
  name: z
    .string()
    .min(1, { message: "What's your name?" })
    .max(50, { message: "Name can contain at most 50 character(s)" }),
  email: z.string().email({ message: "Please enter a valid email." }),
});

export const registerStep2Schema = z.object({
  password: z.string().min(6),
  username: z.string().min(3),
});
