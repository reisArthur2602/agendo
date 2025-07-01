"use client";

import { ComponentProps } from "react";
import { Input } from "./primitive";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { useFormContext } from "react-hook-form";

type InputFieldProps = ComponentProps<typeof Input> & {
  label?: string;
  name: string;
  description?: string;
};

export const InputField = ({
  name,
  label,
  description,
  ...props
}: InputFieldProps) => {
  const methods = useFormContext();

  return (
    <FormField
      control={methods.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              {...field}
              {...props}
              disabled={methods.formState.isSubmitting}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
