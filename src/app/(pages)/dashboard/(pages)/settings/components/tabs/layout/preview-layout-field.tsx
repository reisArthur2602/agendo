"use client";

import { useFormContext } from "react-hook-form";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const layouts = [
  {
    id: "CLASSIC",
    name: "Clássico",
    description: "Design tradicional e elegante com header centralizado",
    preview: "bg-gray-100 border-2 border-gray-300",
  },
  {
    id: "MINIMAL",
    name: "Minimalista",
    description: "Layout limpo dividido em duas colunas",
    preview: "bg-white border-2 border-gray-200",
  },
  {
    id: "MODERN",
    name: "Moderno",
    description: "Estilo moderno com seções bem definidas e visual limpo",
    preview: "bg-white border-2 border-gray-200",
  },
];

export const PreviewLayoutField = () => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="layout"
      render={({ field }) => (
        <FormItem>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {layouts.map((layout) => {
              const isSelected = field.value === layout.id;

              return (
                <FormControl key={layout.id}>
                  <div
                    role="button"
                    onClick={() => field.onChange(layout.id)}
                    className={cn(
                      "cursor-pointer rounded-xl border-2 p-6 transition-all duration-100",
                      isSelected
                        ? "border-primary text-primary bg-blue-50"
                        : "border-gray-200 hover:border-gray-300",
                    )}
                  >
                    <div
                      className={`aspect-video ${layout.preview} relative mb-4 flex items-center justify-center overflow-hidden rounded-lg`}
                    >
                      {layout.id === "CLASSIC" && (
                        <div className="absolute inset-2 flex flex-col rounded border border-gray-400">
                          <div className="h-1/3 border-b border-gray-400 bg-gray-200" />
                          <div className="flex-1 space-y-1 p-1">
                            <div className="h-2 rounded bg-gray-300" />
                            <div className="h-2 w-3/4 rounded bg-gray-300" />
                          </div>
                        </div>
                      )}

                      {layout.id === "MINIMAL" && (
                        <div className="absolute inset-2 flex rounded border border-gray-300">
                          <div className="w-1/2 border-r border-gray-300 bg-gray-100" />
                          <div className="w-1/2 space-y-1 p-1">
                            <div className="h-1 rounded bg-gray-400" />
                            <div className="h-1 w-2/3 rounded bg-gray-400" />
                          </div>
                        </div>
                      )}

                      {layout.id === "MODERN" && (
                        <div className="absolute inset-2 flex flex-col rounded border border-gray-300 bg-white">
                          <div className="h-1/3 border-b border-gray-300 bg-gray-100" />
                          <div className="flex flex-1 flex-col items-center justify-center space-y-1 p-2">
                            <div className="h-2 w-2/3 rounded bg-gray-300" />
                            <div className="h-2 w-1/2 rounded bg-gray-300" />
                          </div>
                        </div>
                      )}
                    </div>

                    <h3 className="mb-2 text-base font-semibold">
                      {layout.name}
                    </h3>
                    <p className="text-xs leading-relaxed">
                      {layout.description}
                    </p>

                    {isSelected && (
                      <div className="text-primary mt-3 flex items-center">
                        <CheckCircle className="mr-2 size-4" />
                        <span className="text-sm font-medium">Selecionado</span>
                      </div>
                    )}
                  </div>
                </FormControl>
              );
            })}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
