"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FrostedGlassIcon } from "../frosted-glass-icon";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  accentColor?: string;
};

export const FeatureCard = ({
  icon,
  title,
  description,
  accentColor = "rgba(120, 120, 255, 0.5)",
}: FeatureCardProps) => {
  const adjustedAccentColor = accentColor;

  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="bg-background/60 dark:bg-background/80 h-full overflow-hidden border backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
        <CardHeader>
          <FrostedGlassIcon
            icon={icon}
            color={accentColor}
            className="mb-4 self-start"
          />
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>

        <motion.div
          className="absolute inset-0 z-0 opacity-20 dark:opacity-30"
          initial={{ opacity: 0 }}
          animate={{
            background: [
              `radial-gradient(circle at 30% 30%, ${adjustedAccentColor} 0%, transparent 60%)`,
              `radial-gradient(circle at 70% 70%, ${adjustedAccentColor} 0%, transparent 60%)`,
            ],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </Card>
    </motion.div>
  );
};
