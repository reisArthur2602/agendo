import Link from "next/link";
import { CssGridBackground } from "../css-grid-background";
import { FramerSpotlight } from "../framer-spotlight";
import { Container } from "@/components/common/container";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <CssGridBackground />
      <FramerSpotlight />

      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <Badge className="px-4 py-2" variant="secondary">
          ✨ Plataforma completa de agendamentos
          </Badge>

          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
          Transforme seu negócio com agendamentos online
          </h1>

          <p className="text-muted-foreground max-w-2xl text-xl md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Crie sua página de agendamentos personalizada em minutos. Seus clientes agendam online e você gerencia tudo em um só lugar.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <LoginLink className={buttonVariants()}>
              Crie sua conta grátis
            </LoginLink>

            <Link
              href="#testimonials"
              className={buttonVariants({ variant: "outline" })}
            >
              Ver depoimentos de clientes
            </Link>
          </div>

          <p className="text-muted-foreground text-sm">
          ✅ Grátis por 7 dias • ✅ Sem cartão de crédito • ✅ Configuração em 5 minutos
          </p>
        </div>
      </Container>
    </section>
  );
};
