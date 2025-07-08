"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Appointment, Availability, Business, Service } from "@prisma/client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarCheck, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DialogAppointment } from "./dialog-appointment";
import { useMultiStepStore } from "@/lib/zustand/multistep";
import { formatPrice, getInitials } from "@/lib/utils";
import { motion } from "framer-motion";

type LayoutClassicProps = {
  business: Business & { services: Service[] } & {
    appointments: Appointment[];
  } & {
    availabilities: Availability[];
  };
};

export const LayoutClassic = ({ business }: LayoutClassicProps) => {
  const { setData } = useMultiStepStore();
  return (
    <motion.div
      className="from-background to-background/80 flex items-center justify-center bg-gradient-to-t"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <main className="w-full max-w-3xl space-y-12">
        <header className="flex flex-col items-center gap-4 p-4">
          <Avatar className="border-background size-40 border-4 shadow-2xl">
            <AvatarFallback className="bg-primary/40 text-4xl font-semibold text-white">
              {getInitials(business.name)}
            </AvatarFallback>
          </Avatar>
          <h1 className="text-3xl font-bold capitalize">{business.name}</h1>
          <p className="text-muted-foreground">{business.description}</p>
        </header>

        <Tabs className="space-y-6" value="services">
          <TabsList className="mx-auto w-full">
            <TabsTrigger value="services" >
              <CalendarCheck className="size-4" />
              Serviços
            </TabsTrigger>
            <TabsTrigger value="availabilities">
              <Clock className="size-4" />
              Horários
            </TabsTrigger>
          </TabsList>

          {/* Services Tabs */}
          <TabsContent value="services">
            <Card className="">
              <CardHeader>
                <CardTitle>Nossos Serviços</CardTitle>
                <CardDescription>
                  Escolha o serviço que melhor atende suas necessidades
                </CardDescription>
              </CardHeader>

              <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {business.services.map((service) => (
                  <Card className="p-6" key={service.id}>
                    <CardHeader className="border-b px-0">
                      <CardTitle className="capitalize">
                        {service.name}
                      </CardTitle>
                      <CardDescription className="mb-6 flex items-center gap-1.5">
                        <Clock className="size-4" /> {service.duration} minutos
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex w-full justify-between px-0">
                      <span className="text-2xl font-bold">
                        {formatPrice(service.price)}
                      </span>
                      <DialogAppointment
                        service={service}
                        availabilities={business.availabilities}
                        appointments={business.appointments}
                      >
                        <Button
                          variant="outline"
                          onClick={() => setData({ service })}
                        >
                          <CalendarCheck /> Agendar
                        </Button>
                      </DialogAppointment>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="availabilities">availabilities</TabsContent>
        </Tabs>
      </main>
    </motion.div>
  );
};
