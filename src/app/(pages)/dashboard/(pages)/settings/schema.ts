import { Layout } from "@prisma/client";
import { z } from "zod";

export const generalSettingsSchema = z.object({
  name: z.string().min(5, "O nome deve conter no mínimo 5 caracteres").trim(),

  description: z.string().min(2, "A descrição é obrigatória").trim(),

  slug: z
    .string()
    .min(2, "O slug é obrigatório e deve conter ao menos 2 caracteres")
    .trim(),

  whatsapp: z.string().optional(),

  instagram: z.string().optional(),
});

const layoutValues = Object.values(Layout) as [string, ...string[]];
export const layoutSettingsSchema = z.object({
  layout: z.enum(layoutValues),
});

// Tipagens
export type GeneralSettingsInput = z.infer<typeof generalSettingsSchema>;
export type LayoutSettingsInput = z.infer<typeof layoutSettingsSchema>;
