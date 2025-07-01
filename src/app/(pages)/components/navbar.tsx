import Link from "next/link";
import { Container } from "../../../components/common/container";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const navItems = [
  { label: "Recursos", href: "#features" },
  { label: "Casos de uso", href: "#use-cases" },
  { label: "Depoimentos", href: "#testimonials" },
];

export const HomeNavbar = () => {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Agendo Homepage"
          >
            <Image
              src="/agendo-logo.png"
              height={31}
              width={94}
              quality={100}
              alt="Logo do agendo"
            />
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
        <LoginLink className={buttonVariants()}>Comece agora mesmo</LoginLink>
      </Container>
    </header>
  );
};
