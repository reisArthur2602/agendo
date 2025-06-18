import { z } from "zod";

export const CreateBusinessSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Nome da organização deve ter pelo menos 2 caracteres" })
    .toLowerCase(),
});

export type CreateBusiness = z.infer<typeof CreateBusinessSchema>;
