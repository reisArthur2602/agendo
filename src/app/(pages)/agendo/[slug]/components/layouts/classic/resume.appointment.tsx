"use client";

import { Button } from "@/components/ui/button";
import { formatDate, formatPrice } from "@/lib/utils";
import { useMultiStepStore } from "@/lib/zustand/multistep";

export const ResumeAppointment = () => {
  const { data } = useMultiStepStore();

  const appointmentItems = [
    {
      label: "Serviço:",
      value: data.service?.name,
    },
    {
      label: "Data e Hora",
      value: data.date && formatDate(data.date),
    },
    {
      label: "Cliente:",
      value: data.customerName,
    },
    {
      label: "Telefone:",
      value: data.customerPhone,
    },
  ];

  return (
    <div className="grid gap-6">
      <div className="space-y-4 text-sm">
        {appointmentItems.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-semibold">{item.value}</span>
            </div>
          </div>
        ))}

        <div>
          <div className="flex items-center justify-between font-bold">
            <span>Valor Total:</span>
            <span className="text-primary">
              {data.service?.price && formatPrice(data.service.price)}
            </span>
          </div>
        </div>
      </div>

      <Button size="lg">Confirmar Agendamento</Button>
    </div>
  );
};
