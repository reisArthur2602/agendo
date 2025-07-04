// schema.ts
import { z } from "zod";

export const generalSettingsSchema = z.object({
  name: z.string().min(5, "O nome deve conter no mínimo 5 caracteres").trim(),
  description: z.string().min(2, "A descrição é obrigatória").trim(),
  slug: z.string().min(2, "A descrição é obrigatória").trim(),
  whatsapp: z.string().min(2, "A descrição é obrigatória").trim(),
  instagram: z.string().min(2, "A descrição é obrigatória").trim(),
});

export type GeneralSettingsInput = z.infer<typeof generalSettingsSchema>;
