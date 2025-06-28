import Link from "next/link";
import { CssGridBackground } from "../css-grid-background";
import { FramerSpotlight } from "../framer-spotlight";
import { Container } from "../../ui/container";
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
            ✨ Grátis para começar
          </Badge>

          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
            Transforme sua agenda em uma máquina de agendamentos
          </h1>

          <p className="text-muted-foreground max-w-2xl text-xl md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            O sistema ideal para prestadores de serviços que desejam automatizar
            agendamentos, personalizar horários e atender seus clientes com mais
            organização e profissionalismo.
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
            Comece grátis • Não requer cartão
          </p>
        </div>
      </Container>
    </section>
  );
};
