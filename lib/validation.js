import * as z from "zod";

export const registerFirstStepSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
});

export const registerStep2Schema = z.object({
  password: z.string().min(6),
  username: z.string().min(3),
});
