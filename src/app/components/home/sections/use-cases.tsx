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

import { FeatureCard } from "./feature-card";
import { SectionTitle } from "./section-title";
import { Container } from "../../ui/container";

const useCases = [
  {
    icon: <ScissorsIcon />,
    title: "Salões de Beleza",
    description:
      "Agendamentos online para cortes, coloração e serviços estéticos, com confirmação automática.",
    accentColor: "rgba(236, 72, 153, 0.5)",
  },
  {
    icon: <StethoscopeIcon />,
    title: "Clínicas e Consultórios",
    description:
      "Organize atendimentos médicos ou odontológicos com praticidade e lembretes automáticos.",
    accentColor: "rgba(59, 130, 246, 0.5)",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Consultorias e Mentorias",
    description:
      "Agende sessões individuais ou em grupo com automações que economizam seu tempo.",
    accentColor: "rgba(34, 197, 94, 0.5)",
  },
  {
    icon: <StoreIcon />,
    title: "Comércios Locais",
    description:
      "Controle horários de atendimento, retiradas ou entregas com mais eficiência.",
    accentColor: "rgba(245, 158, 11, 0.5)",
  },
  {
    icon: <UserCircleIcon />,
    title: "Serviços Autônomos",
    description:
      "Perfeito para freelancers, massagistas, tatuadores e profissionais que atendem sob demanda.",
    accentColor: "rgba(168, 85, 247, 0.5)",
  },
  {
    icon: <CalendarIcon />,
    title: "Eventos e Reservas",
    description:
      "Gerencie inscrições para workshops, aulas, encontros e eventos exclusivos.",
    accentColor: "rgba(14, 165, 233, 0.5)",
  },
  {
    icon: <LayoutIcon />,
    title: "Coworkings e Espaços Compartilhados",
    description:
      "Permita a reserva de salas, mesas ou equipamentos com controle de horários personalizado.",
    accentColor: "rgba(244, 114, 182, 0.5)",
  },
  {
    icon: <CameraIcon />,
    title: "Estúdios de Fotografia",
    description:
      "Organize ensaios e sessões com facilidade, e envie lembretes automáticos aos clientes.",
    accentColor: "rgba(250, 204, 21, 0.5)",
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
        <SectionTitle
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
