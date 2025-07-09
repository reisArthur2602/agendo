"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input/primitive";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Availability, Day } from "@prisma/client";
import { Save } from "lucide-react";
import { useForm, Controller, useFieldArray } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { updateAvailabilities } from "../../server/update-availabilities";
import {
  AvailabilitiesFormInput,
  availabilitiesFormSchema,
} from "../../schema";

type AvailabilitiesFormProps = {
  availabilities: Availability[];
};

const days: { key: Day; label: string }[] = [
  { key: "Monday", label: "Segunda-feira" },
  { key: "Tuesday", label: "Terça-feira" },
  { key: "Wednesday", label: "Quarta-feira" },
  { key: "Thursday", label: "Quinta-feira" },
  { key: "Friday", label: "Sexta-feira" },
  { key: "Saturday", label: "Sábado" },
  { key: "Sunday", label: "Domingo" },
];

export const AvailabilitiesForm = ({
  availabilities,
}: AvailabilitiesFormProps) => {
  const methods = useForm<AvailabilitiesFormInput>({
    resolver: zodResolver(availabilitiesFormSchema),
    defaultValues: {
      availabilities: availabilities.map((a) => ({
        id: a.id,
        day: a.day,
        isActive: a.isActive,
        from: a.from,
        to: a.to,
      })),
    },
  });

  const { fields } = useFieldArray({
    control: methods.control,
    name: "availabilities",
  });

  const onSubmit = async (data: AvailabilitiesFormInput) => {
    const { isSuccess, error } = await updateAvailabilities(data);
    if (!isSuccess) return toast.error(error);
    toast.success("Atualização feita com sucesso!");
    methods.reset(data);
  };

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <div className="space-y-4">
            {fields.map((day, idx) => (
              <div
                key={day.id}
                className="flex items-center justify-between rounded-lg border p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Controller
                      control={methods.control}
                      name={`availabilities.${idx}.isActive`}
                      render={({ field }) => (
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      )}
                    />
                    <Label>{days.find((d) => d.key === day.day)?.label}</Label>
                  </div>
                </div>

                {!methods.watch(`availabilities.${idx}.isActive`) ? (
                  <p className="text-muted-foreground ml-8 text-sm">
                    Fechado neste dia
                  </p>
                ) : (
                  <div className="flex items-center gap-4">
                    <Controller
                      control={methods.control}
                      name={`availabilities.${idx}.from`}
                      render={({ field }) => (
                        <Input
                          type="time"
                          value={field.value}
                          onChange={field.onChange}
                          disabled={
                            !methods.watch(`availabilities.${idx}.isActive`)
                          }
                        />
                      )}
                    />
                    <span className="text-muted-foreground">às</span>
                    <Controller
                      control={methods.control}
                      name={`availabilities.${idx}.to`}
                      render={({ field }) => (
                        <Input
                          type="time"
                          value={field.value}
                          onChange={field.onChange}
                          disabled={
                            !methods.watch(`availabilities.${idx}.isActive`)
                          }
                        />
                      )}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Button size="lg" type="submit">
            <Save />
            Salvar alterações
          </Button>
        </div>
      </form>
    </Form>
  );
};
