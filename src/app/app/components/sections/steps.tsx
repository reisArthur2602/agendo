import { Container } from "@/components/ui/container";

export const StepsSection = () => {
  return (
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
  );
};
