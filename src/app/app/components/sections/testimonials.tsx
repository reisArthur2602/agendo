import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Container } from "@/components/ui/container";

const testimonials = [
  {
    quote:
      "Desde que começamos a usar o sistema de agendamentos pelo WhatsApp, nosso salão nunca esteve tão organizado. Os lembretes automáticos reduziram faltas em 70%.",
    name: "Juliana Ferreira",
    title: "Proprietária, Studio JF Beauty",
    avatar: "JF",
  },
  {
    quote:
      "O sistema é simples de usar e nossos pacientes amam poder agendar pelo WhatsApp. A integração com nossa agenda semanal facilitou tudo.",
    name: "Dr. Ricardo Lima",
    title: "Clínica Bem Viver",
    avatar: "RL",
  },
  {
    quote:
      "Automatizar os agendamentos foi a melhor decisão. Ganhamos tempo, melhoramos o atendimento e conseguimos acompanhar tudo com facilidade.",
    name: "Ana Paula Castro",
    title: "Consultora, APC Treinamentos",
    avatar: "AP",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="bg-primary text-primary-foreground mb-2 inline-block rounded-lg px-3 py-1 text-sm">
              Depoimentos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Confiança de quem já usa
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
              Profissionais e empresas já estão transformando sua rotina com
              nosso sistema de agendamentos via WhatsApp.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex h-full flex-col">
              <CardContent className="flex-grow pt-6">
                <div className="mb-4 text-4xl">"</div>
                <p className="text-muted-foreground italic">
                  {testimonial.quote}
                </p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
