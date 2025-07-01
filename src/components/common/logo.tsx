import { Calendar } from "lucide-react";
import Link from "next/link";

type LogoProps = {
  variant?: "short" | "default";
};

export const Logo = ({ variant = "default" }: LogoProps) => {
  return (
    <Link
      href="/"
      aria-label="Agendo Homepage"
      className="flex items-center gap-2"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600">
        <Calendar className="h-4 w-4 text-white" />
      </div>
      {variant === "default" && (
        <span className="text-accent-foreground text-xl font-bold">Agendo</span>
      )}
    </Link>
  );
};
