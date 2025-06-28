"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { SectionTitle } from "./section-title";
import { motion } from "framer-motion";
import { Container } from "../../ui/container";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
    <section className="py-20" id="testimonials">
      <Container>
        <SectionTitle
          badge="Depoimentos"
          title=" Confiança de quem já usa"
          description="Profissionais e empresas já estão transformando sua rotina com
              nosso sistema de agendamentos via WhatsApp."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card key={index} className="flex h-full flex-col">
                <CardContent className="flex-grow pt-6">
                  <div className="mb-4 text-4xl">{`"`}</div>
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
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
