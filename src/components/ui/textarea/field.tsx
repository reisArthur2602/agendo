"use client";

import { ComponentProps } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { useFormContext } from "react-hook-form";
import { Textarea } from "./primitve";

type TextareaFieldProps = ComponentProps<typeof Textarea> & {
  label?: string;
  name: string;
  description?: string;
};

export const TextareaField = ({
  name,
  label,
  description,
  ...props
}: TextareaFieldProps) => {
  const methods = useFormContext();

  return (
    <FormField
      control={methods.control}
      disabled={methods.formState.isSubmitting}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea {...field} {...props} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
