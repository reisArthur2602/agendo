import { CssGridBackground } from "@/components/ui/css-grid-background";
import { Navbar } from "./components/navbar";
import { FramerSpotlight } from "@/components/ui/framer-spotlight";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FeaturesSection } from "./components/sections/features";
import { UseCasesSection } from "./components/sections/use-cases";
import { TestimonialsSection } from "./components/sections/testimonials";

const Home = () => {
  return (
    <div className="grid">
      <Navbar />

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
              <Button size="lg">Começar Grátis</Button>
              <Button variant="outline" size="lg">
                Leia mais
              </Button>
            </div>

            <p className="text-muted-foreground text-sm">
              Grátis por 14 dias • Sem cartão de crédito
            </p>
          </div>
        </Container>
      </section>

      <FeaturesSection />

      <section
        className="py-20"
        id="how-it-works"
        aria-labelledby="how-it-works-heading"
      >
        <Container>
          <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2
                id="how-it-works-heading"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              >
                Comece em minutos
              </h2>
              <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
                Três passos simples para transformar sua rotina de agendamentos
              </p>
            </div>
          </div>
          <div className="grid items-start gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-primary text-primary-foreground flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold">Configure o seu negócio</h3>
              <p className="text-muted-foreground">
                Configure rapidamente as informações básicas como nome, local e
                disponibilidade do seu negócio.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-primary text-primary-foreground flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold">Adicione os seus serviços</h3>
              <p className="text-muted-foreground">
                Defina sua disponibilidade com regras flexíveis para diferentes
                tipos e durações de atendimentos.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="bg-primary text-primary-foreground flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold">
                Compartilhe o link do seu negócio
              </h3>
              <p className="text-muted-foreground">
                Envie seu link de agendamento personalizado e permita que seus
                clientes reservem com você
              </p>
            </div>
          </div>
        </Container>
      </section>

      <UseCasesSection />

      <TestimonialsSection />
    </div>
  );
};

export default Home;
