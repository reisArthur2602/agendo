import { z } from "zod";

export const generalSettingsSchema = z.object({
  name: z
    .string()
    .min(2, "O nome é obrigatório e deve conter ao menos 2 caracteres")
    .trim(),

  description: z.string().min(2, "A descrição é obrigatória").trim(),

  slug: z.string().min(2, "O slug é obrigatório ").trim(),

  whatsapp: z
    .string()
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, {
      message: "Telefone inválido. Ex: (21) 97514-0550",
    })
    .optional(),

  instagram: z.string().optional(),
});

export const layoutSettingsSchema = z.object({
  layout: z.enum(["CLASSIC", "MODERN", "MINIMAL"]),
});

export type GeneralSettingsInput = z.infer<typeof generalSettingsSchema>;
export type LayoutSettingsInput = z.infer<typeof layoutSettingsSchema>;
