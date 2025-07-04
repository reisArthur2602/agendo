import { Business } from "@prisma/client";
import { create } from "zustand";

type BusinessStore = {
  business: Business | null;
  setBusiness: (business: Business) => void;
};

export const useBusinessStore = create<BusinessStore>((set) => ({
  business: null,
  setBusiness: (business) => set({ business }),
}));
