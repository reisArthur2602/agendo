import { z } from "zod";

export const AvailabilitySchema = z.object({
  id: z.string(),
  day: z.enum([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]),
  isActive: z.boolean(),
  from: z.string().regex(/^\d{2}:\d{2}$/),
  to: z.string().regex(/^\d{2}:\d{2}$/),
});

export const availabilitiesFormSchema = z.object({
  availabilities: z.array(AvailabilitySchema),
});

export type AvailabilitiesFormInput = z.infer<typeof availabilitiesFormSchema>;
