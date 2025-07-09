"use client";

import { useState } from "react";
import {
  addMinutes,
  format,
  getDay,
  isSameDay,
  isBefore,
  isAfter,
  startOfDay,
  endOfWeek,
  isPast,
} from "date-fns";
import { ptBR } from "date-fns/locale";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Availability, Appointment, Day, Service } from "@prisma/client";
import { useMultiStepStore } from "@/lib/zustand/multistep";
import {
  combineDateAndTime,
  generateTimeSlots,
  weekDays,
} from "../../../utils";

type AppointmentWithService = Appointment & {
  service: Service;
};

type CalendarAppointmentProps = {
  availabilities: Availability[];
  appointments: AppointmentWithService[];
  serviceDuration: number;
};

export const CalendarAppointment = ({
  availabilities,
  appointments,
  serviceDuration,
}: CalendarAppointmentProps) => {
  const today = startOfDay(new Date());
  const [date, setDate] = useState<Date>(today);
  const [time, setTime] = useState<string | null>(null);
  const { setMultiStep, currentStep, setData, data } = useMultiStepStore();

  const selectedDayName = weekDays[getDay(date)];

  const activeDaysOfWeek = availabilities
    .filter((a) => a.isActive)
    .map((a) => a.day);

  const availableSlots = availabilities
    .filter((a) => a.day === selectedDayName && a.isActive)
    .flatMap((a) => generateTimeSlots({ from: a.from, to: a.to }));

  const occupiedSlots = appointments
    .filter((appt) => isSameDay(new Date(appt.date), date))
    .flatMap((appt) => {
      const start = new Date(appt.date);
      const end = addMinutes(start, appt.service.duration);

      return generateTimeSlots({
        from: format(start, "HH:mm"),
        to: format(end, "HH:mm"),
      });
    });

  const freeSlots = availableSlots.filter((slot) => {
    const slotStart = combineDateAndTime(date, slot);
    const slotEnd = addMinutes(slotStart, serviceDuration);

    if (isPast(slotStart)) return false;

    const currentSlotRange = generateTimeSlots({
      from: format(slotStart, "HH:mm"),
      to: format(slotEnd, "HH:mm"),
    });

    return currentSlotRange.every((minute) => !occupiedSlots.includes(minute));
  });

  const handleSelectDate = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(newDate);
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
            locale={ptBR}
            disableNavigation
            mode="single"
            selected={date}
            onSelect={handleSelectDate}
            className="p-2 sm:pe-5"
            disabled={(date) => {
              const isBeforeToday = isBefore(date, today);
              const isAfterThisSunday = isAfter(
                date,
                endOfWeek(today, { weekStartsOn: 1 }),
              );

              const dayName = weekDays[getDay(date)] as Day;
              const isUnavailable = !activeDaysOfWeek.includes(dayName);

              return isBeforeToday || isAfterThisSunday || isUnavailable;
            }}
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
