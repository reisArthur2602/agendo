import { Button, buttonVariants } from "@/components/ui/button/primitive";
import { Container } from "@/components/ui/container";
import { CssGridBackground } from "@/components/ui/css-grid-background";
import { FramerSpotlight } from "@/components/ui/framer-spotlight";
import { SigninDialog } from "../signin-dialog";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <CssGridBackground />
      <FramerSpotlight />

      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <div className="bg-muted inline-block rounded-lg px-3 py-1 text-sm">
            Solução para seus agendamentos
          </div>

          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
            Gerencie seu agendamentos com facilidade
          </h1>

          <p className="text-muted-foreground max-w-2xl text-xl md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Plataforma completa para profissionais que querem organizar sua
            agenda, automatizar confirmações e oferecer a melhor experiência
            para seus clientes.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <SigninDialog>
              <Button>Comece agora mesmo</Button>
            </SigninDialog>

            <Link
              href="testimonials"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              Conheça a plataforma
            </Link>
          </div>

          <p className="text-muted-foreground text-sm">
            Grátis por 7 dias • Sem cartão de crédito
          </p>
        </div>
      </Container>
    </section>
  );
};
