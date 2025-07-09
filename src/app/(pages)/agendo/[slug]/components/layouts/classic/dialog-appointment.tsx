"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Appointment, Availability, Service } from "@prisma/client";
import { JSX, ReactNode, useState } from "react";

import { CalendarAppointment } from "./calendar-appointment";
import { useMultiStepStore } from "@/lib/zustand/multistep";
import { ContactForm } from "./contact-form";
import { ResumeAppointment } from "./resume.appointment";

type DialogAppointmentProps = {
  service: Service;
  availabilities: Availability[];
  appointments: (Appointment & { service: Service })[];
  children: ReactNode;
};

type StepsAppointmentProps = {
  title?: string;
  description?: string;
  content: JSX.Element;
};

export const DialogAppointment = ({
  children,
  service,
  availabilities,
  appointments,
}: DialogAppointmentProps) => {
  const { currentStep, reset } = useMultiStepStore();
  const [open, setOpen] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) reset(); // limpa ao fechar o dialog
  };

  const stepsAppointment: StepsAppointmentProps[] = [
    {
      title: "Escolha a data e hora",
      description: `Serviço selecionado: ${service.name} - ${service.duration} min - R$ ${service.price}`,
      content: (
        <CalendarAppointment
          availabilities={availabilities}
          appointments={appointments}
          serviceDuration={service.duration}
        />
      ),
    },
    {
      title: "Dados para Contato",
      description: "Informe seus dados para confirmarmos o agendamento",
      content: <ContactForm />,
    },
    {
      title: "Confirmação do Agendamento",
      description: "Verifique os dados antes de confirmar",
      content: <ResumeAppointment />,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full max-w-xl">
        <DialogHeader>
          {stepsAppointment[currentStep].title && (
            <DialogTitle>{stepsAppointment[currentStep].title}</DialogTitle>
          )}

          {stepsAppointment[currentStep].description && (
            <DialogDescription>
              {stepsAppointment[currentStep].description}
            </DialogDescription>
          )}
        </DialogHeader>
        {stepsAppointment[currentStep].content}
      </DialogContent>
    </Dialog>
  );
};
