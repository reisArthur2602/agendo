"use client";

import { Button } from "./primitive";
import { Loader2Icon } from "lucide-react";
import { useFormContext } from "react-hook-form";

type SubmitButtonProps = React.ComponentProps<"button">;

export const SubmitButton = ({ children, ...rest }: SubmitButtonProps) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <Button disabled={isSubmitting} {...rest}>
      {isSubmitting ? (
        <div className="flex items-center gap-2">
          <Loader2Icon className="size-4 animate-spin" />
          Carregando...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};
