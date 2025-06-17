import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

import Link from "next/link";

const navItems = [
  { label: "Recursos", href: "#features" },
  { label: "Casos de uso", href: "#use-cases" },
  { label: "Depoimentos", href: "#testimonials" },
];

export const Navbar = () => {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Agendo Homepage"
          >
            <span className="text-2xl font-bold">agendo</span>
          </Link>
        </div>

        <nav className="flex gap-6" aria-label="Main Navigation">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/app/signin" className={buttonVariants()}>
          Comece agora mesmo
        </Link>
      </Container>
    </header>
  );
};
