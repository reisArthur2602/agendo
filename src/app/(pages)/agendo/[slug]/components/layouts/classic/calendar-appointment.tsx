"use client";

import { useState } from "react";
import { addDays, format, getDay, isSameDay } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Availability, Appointment } from "@prisma/client";
import { useMultiStepStore } from "@/lib/zustand/multistep";
import { ptBR } from "date-fns/locale";
import {
  combineDateAndTime,
  generateTimeSlots,
  weekDays,
} from "../../../utils";

type CalendarAppointmentProps = {
  availabilities: Availability[];
  appointments: Appointment[];
};

export const CalendarAppointment = ({
  availabilities,
  appointments,
}: CalendarAppointmentProps) => {
  const today = new Date();

  const [date, setDate] = useState<Date>(today);
  const [time, setTime] = useState<string | null>(null);
  const { setMultiStep, currentStep, setData, data } = useMultiStepStore();

  const selectedDayName = weekDays[getDay(date)];

  // slots
  const timeSlots = availabilities
    .filter((a) => a.day === selectedDayName && a.isActive)
    .flatMap(
      (slot) => generateTimeSlots({ from: slot.from, to: slot.to }) || [],
    );

  const ocuppiedSlots = appointments
    .filter((a) => isSameDay(new Date(a.date), date))
    .map((a) => format(new Date(a.date), "HH:mm"));

  const freeSlots = timeSlots.filter((slot) => !ocuppiedSlots.includes(slot));

  const workDays = availabilities.filter((a) => a.isActive).length;

  const handleSelectDate = (value: Date | undefined) => {
    if (value) {
      setDate(value);
      setTime(null);
    }
  };
  const handleSelectTime = (value: string) => {
    setTime(value);
    setData({ ...data, date: combineDateAndTime(date, value) });
    setMultiStep(currentStep + 1);
  };
  return (
    <div>
      <div className="rounded-md border">
        <div className="flex flex-col md:flex-row">
          <Calendar
            disableNavigation
            locale={ptBR}
            mode="single"
            selected={date}
            onSelect={handleSelectDate}
            className="p-2 sm:pe-5"
            disabled={[{ before: today, after: addDays(today, workDays - 1) }]}
          />
          <div className="relative flex-1 max-sm:h-48 sm:w-40">
            <div className="absolute inset-0 py-4 max-sm:border-t">
              <ScrollArea className="h-full sm:border-s">
                <div className="space-y-3">
                  <div className="flex h-5 shrink-0 items-center px-5">
                    <p className="text-sm font-medium">
                      {format(date, "EEEE, d", { locale: ptBR })}
                    </p>
                  </div>
                  <div className="grid gap-1.5 px-5 max-sm:grid-cols-2">
                    {freeSlots.length > 0 ? (
                      freeSlots.map((slot) => (
                        <Button
                          key={slot}
                          variant={time === slot ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleSelectTime(slot)}
                        >
                          {slot}
                        </Button>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-xs">
                        Nenhum horário disponível
                      </p>
                    )}
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
