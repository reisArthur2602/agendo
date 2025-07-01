import { z } from "zod";

export const createBusinessSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, {
      message: "O nome do estabelecimento deve ter no mínimo 2 caracteres.",
    })
    .toLowerCase(),
  description: z.string().min(2, {
    message: "A descrição é obrigatória e deve ter pelo menos 2 caracteres.",
  }),
});

export type CreateBusinessInput = z.infer<typeof createBusinessSchema>;
