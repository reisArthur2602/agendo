import { z } from "zod";

export const contactSchema = z.object({
  customerName: z.string().min(2, "Campo obrigatório").trim(),
  customerPhone: z.string().regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, {
    message: "Telefone inválido. Ex: (21) 97514-0550",
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;
