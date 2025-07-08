import { Service } from "@prisma/client";
import { create } from "zustand";

type MultiStepData = {
  service?: Service;
  date?: Date;
  customerName?: string;
  customerPhone?: string;
};

type MultiStepStore = {
  currentStep: number;
  data: MultiStepData;
  setMultiStep: (currentStep: number) => void;
  setData: (data: MultiStepData) => void;
  reset: () => void;
};

export const useMultiStepStore = create<MultiStepStore>((set) => ({
  currentStep: 0,
  data: {},
  setMultiStep: (currentStep) => set({ currentStep }),
  setData: (data) => set({ data }),
  reset: () =>
    set(() => ({
      currentStep: 0,
      data: {},
    })),
}));
