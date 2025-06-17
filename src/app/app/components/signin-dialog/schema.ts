import { z } from "zod";

export const SigninSchema = z.object({
  email: z.string().trim().email({ message: "Insira um e-mail válido" }),
});

export type SigninFormData = z.infer<typeof SigninSchema>;
