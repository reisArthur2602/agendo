// schema.ts
import { z } from "zod";

const ServiceDataSchema = z.object({
  name: z.string().min(5, "O nome deve conter no mínimo 5 caracteres").trim(),
  description: z.string().min(2, "A descrição é obrigatória").trim(),
  duration: z.coerce
    .number()
    .min(15, "Duração mínima de 15 minutos")
    .max(360, "Duração máxima de 6 horas"),
  price: z.coerce
    .number()
    .min(0, "Preço deve ser maior ou igual a zero")
    .max(9999, "Preço máximo de R$ 9.999,00"),
  isActive: z.boolean().optional(),
});

export const UpsertServiceSchema = ServiceDataSchema.extend({
  id: z.string().optional(),
});

export type UpsertService = z.infer<typeof UpsertServiceSchema>;
