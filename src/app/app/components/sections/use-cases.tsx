"use client";

import { motion } from "framer-motion";

import {
  CalendarIcon,
  ScissorsIcon,
  StethoscopeIcon,
  UserCircleIcon,
  BriefcaseIcon,
  StoreIcon,
  LayoutIcon,
  CameraIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { FeatureCard } from "./feature-card";
import { TitleSection } from "./title";

const useCases = [
  {
    icon: <ScissorsIcon />,
    title: "Salões de Beleza",
    description:
      "Permita que seus clientes agendem cortes, coloração e serviços estéticos diretamente pelo WhatsApp.",
    accentColor: "rgba(236, 72, 153, 0.5)",
  },
  {
    icon: <StethoscopeIcon />,
    title: "Clínicas e Consultórios",
    description:
      "Organize agendamentos médicos ou odontológicos de forma prática e automatizada via WhatsApp.",
    accentColor: "rgba(59, 130, 246, 0.5)",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Consultorias e Mentorias",
    description:
      "Agende sessões individuais ou em grupo com envio automático de lembretes e confirmações.",
    accentColor: "rgba(34, 197, 94, 0.5)",
  },
  {
    icon: <StoreIcon />,
    title: "Comércios Locais",
    description:
      "Gerencie horários de retirada, entregas e atendimentos personalizados com facilidade.",
    accentColor: "rgba(245, 158, 11, 0.5)",
  },
  {
    icon: <UserCircleIcon />,
    title: "Serviços Autônomos",
    description:
      "Ideal para freelancers, designers, massagistas, tatuadores e outros profissionais autônomos.",
    accentColor: "rgba(168, 85, 247, 0.5)",
  },
  {
    icon: <CalendarIcon />,
    title: "Eventos e Reservas",
    description:
      "Gerencie reservas para workshops, eventos privados ou experiências exclusivas.",
    accentColor: "rgba(14, 165, 233, 0.5)",
  },
  {
    icon: <LayoutIcon />,
    title: "Coworkings e Espaços Compartilhados",
    description:
      "Permita que usuários reservem salas, mesas e recursos de forma rápida e prática pelo WhatsApp.",
    accentColor: "rgba(244, 114, 182, 0.5)",
  },
  {
    icon: <CameraIcon />,
    title: "Estúdios de Fotografia",
    description:
      "Agende ensaios, sessões corporativas ou eventos com envio automático de lembretes pelo WhatsApp.",
    accentColor: "rgba(250, 204, 21, 0.5)", // amarelo
  },
];

export const UseCasesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      className="from-background to-muted/30 bg-gradient-to-b py-20"
      id="use-cases"
    >
      <Container>
        <TitleSection
          badge="Casos de Uso"
          title="Para qualquer tipo de negócio"
          description="Nosso sistema de agendamentos via WhatsApp se adapta a diferentes
              áreas e nichos."
        />

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {useCases.map((useCase, index) => (
            <FeatureCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              accentColor={useCase.accentColor}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
